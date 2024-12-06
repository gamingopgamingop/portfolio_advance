import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-cyan-400">Sarthak Bansal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:hello@example.com" icon={<Mail />} label="Email" />
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}