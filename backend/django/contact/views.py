from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Contact
from .forms import ContactForm

# View to display a list of all contact messages
def contact_list(request):
    contacts = Contact.objects.all()  # Retrieve all contacts from the database
    return render(request, 'contacts/contact_list.html', {'contacts': contacts})

# View to handle contact form submission
def contact_form(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()  # Save the new contact message to the database
            return redirect('contact_list')  # Redirect to the contact list after submission
    else:
        form = ContactForm()

    return render(request, 'contacts/contact_form.html', {'form': form})

# A simple view to display a thank you message after form submission
def thank_you(request):
    return HttpResponse("Thank you for contacting us!")
