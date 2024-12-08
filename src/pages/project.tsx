// src/components/Project.tsx

// import React from 'react';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, image, tech, github, demo }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
      <ul>
        {tech.map((techItem, index) => (
          <li key={index}>{techItem}</li>
        ))}
      </ul>
      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
  );
};

export default Project;
