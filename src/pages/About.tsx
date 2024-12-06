import React from 'react';
import { Code, Coffee, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-300">
              Passionate about creating beautiful, functional, and user-friendly applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in web development, I've worked on various projects
                ranging from small business websites to large-scale enterprise applications.
              </p>
              <p className="text-gray-600">
                I specialize in creating responsive, performant web applications using modern
                technologies and best practices. My goal is to deliver exceptional user experiences
                through clean, maintainable code.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard
                icon={<Code className="w-8 h-8 text-cyan-500" />}
                number="100+"
                label="Projects Completed"
              />
              <StatCard
                icon={<Users className="w-8 h-8 text-cyan-500" />}
                number="50+"
                label="Happy Clients"
              />
              <StatCard
                icon={<Coffee className="w-8 h-8 text-cyan-500" />}
                number="1000+"
                label="Coffee Cups"
              />
              <StatCard
                icon={<Heart className="w-8 h-8 text-cyan-500" />}
                number="∞"
                label="Love for Code"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-4">{icon}</div>
      <div className="text-2xl font-bold mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}