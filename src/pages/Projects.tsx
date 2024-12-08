import React, { useState, useEffect, useMemo } from 'react';
import { Github, ExternalLink } from 'react-feather';

function ProjectCard({ title, description, image, github, demo }) {
  // Error handling for network requests
  const handleError = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response;
      })
      .catch((error) => {
        console.error('There was an error with the network request:', error);
        // Optionally, display a fallback UI for users
        alert(`Error loading the link: ${url}`);
      });
  };

  // Lazy load image
  const optimizedImage = useMemo(() => {
    return image ? `${image}?w=500&h=500&fit=crop&auto=compress` : '';
  }, [image]);

  return (
    <div className="project-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
      {/* Project Image */}
      <img
        src={optimizedImage}
        alt={`Screenshot of the ${title} project showing the app interface`}
        className="w-full h-48 object-cover"
        loading="lazy"
        // Optional: Responsive images for better performance
        srcSet="image-500w.jpg 500w, image-1000w.jpg 1000w, image-1500w.jpg 1500w"
        sizes="(max-width: 600px) 500px, (max-width: 1000px) 1000px, 1500px"
      />

      <div className="p-4">
        {/* Project Title */}
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        {/* Project Description */}
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Action Links */}
        <div className="flex justify-between items-center mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            onClick={() => handleError(github)}
            aria-label="View project code on GitHub"
          >
            <Github size={20} />
            <span>Code</span>
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700"
            onClick={() => handleError(demo)}
            aria-label="View live demo"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Toggle dark mode class
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="projects-container">
      <header className="flex justify-between items-center p-4" id="header" tabIndex="0">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="py-20">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Project One"
              description="This is a description of project one."
              image="image1.jpg"
              github="https://github.com/project1"
              demo="https://demo.project1.com"
            />
            <ProjectCard
              title="Project Two"
              description="This is a description of project two."
              image="image2.jpg"
              github="https://github.com/project2"
              demo="https://demo.project2.com"
            />
            <ProjectCard
              title="Project Three"
              description="This is a description of project three."
              image="image3.jpg"
              github="https://github.com/project3"
              demo="https://demo.project3.com"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
