import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    type: 'bot',
    content: 'Hi! I\'m Sarthak\'s AI assistant. How can I help you today?',
    timestamp: new Date()
  }
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        content: getAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getAIResponse = (userInput: string): string => {
    const responses = {
      default: "I'm here to help! Could you please provide more details about your question?",
      greetings: "Hello! How can I assist you today?",
      projects: "I'd be happy to tell you about Sarthak's projects. He has worked on various web applications using React, Node.js, and other modern technologies.",
      contact: "You can contact Sarthak through the contact form on this website or via email at hello@example.com",
      skills: "Sarthak is proficient in React, TypeScript, Node.js, and many other modern web technologies."
    };

    const input = userInput.toLowerCase();
    if (input.includes('hello') || input.includes('hi')) return responses.greetings;
    if (input.includes('project')) return responses.projects;
    if (input.includes('contact')) return responses.contact;
    if (input.includes('skill') || input.includes('technology')) return responses.skills;
    return responses.default;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 p-4 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-colors ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              height: isMinimized ? 'auto' : '500px'
            }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden ${
              isMinimized ? 'h-auto' : 'h-[500px]'
            }`}
          >
            <div className="p-4 bg-cyan-500 text-white flex justify-between items-center">
              <h3 className="font-semibold">AI Assistant</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:text-gray-200"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-200"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-cyan-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="p-4 border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}