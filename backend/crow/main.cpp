#include "crow.h"
#include <iostream>
#include <vector>
#include <string>
#include <boost/asio.hpp>
#include <boost/regex.hpp>
#include <openssl/ssl.h>
#include <openssl/err.h>

using namespace std;

struct Contact {
    string name;
    string email;
    string message;
    string created_at; // In a real app, you would use a timestamp here
};

vector<Contact> contacts; // In-memory storage for contacts (for demonstration)

int main() {
    crow::SimpleApp app;

    // Route to serve the contact form
    app.route_dynamic("/contact")
    .methods("GET"_method, "POST"_method)
    ([](const crow::request& req){
        if (req.method == "GET") {
            // Display the contact form (in a real-world case, this could render HTML)
            return crow::response(200, "<html><body>"
                "<h1>Contact Us</h1>"
                "<form method='POST' action='/contact'>"
                "Name: <input type='text' name='name'><br>"
                "Email: <input type='email' name='email'><br>"
                "Message: <textarea name='message'></textarea><br>"
                "<button type='submit'>Submit</button>"
                "</form>"
                "</body></html>");
        } else if (req.method == "POST") {
            // Process the contact form submission
            auto name = req.body_params.find("name")->second;
            auto email = req.body_params.find("email")->second;
            auto message = req.body_params.find("message")->second;

            // Create a new contact object and add it to the storage
            Contact newContact = {name, email, message, "2024-12-14 10:00:00"}; // Hardcoded timestamp
            contacts.push_back(newContact);

            // Return a thank you message
            return crow::response(200, "<html><body>"
                "<h1>Thank you for your message!</h1>"
                "<p>We will get back to you soon.</p>"
                "</body></html>");
        }

        return crow::response(400, "Invalid request method.");
    });

    // Route to display all submitted contacts
    app.route_dynamic("/contacts")
    .methods("GET"_method)
    ([](){
        if (contacts.empty()) {
            return crow::response(200, "<html><body><h1>No contacts submitted yet.</h1></body></html>");
        }

        string contactsHTML = "<html><body><h1>Submitted Contacts</h1><ul>";
        for (const auto& contact : contacts) {
            contactsHTML += "<li>Name: " + contact.name + "<br>Email: " + contact.email + "<br>Message: " + contact.message + "<br>Submitted At: " + contact.created_at + "</li>";
        }
        contactsHTML += "</ul></body></html>";

        return crow::response(200, contactsHTML);
    });

    // Start the server
    app.port(8080).run();

    return 0;
}
