// src/components/ProjectList.tsx
import React from 'react';
import Projects from './Projects';

const ProjectList: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "/path/to/image1.jpg",
      tech: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/username/project1",
      demo: "https://project1.com"
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "/path/to/image2.jpg",
      tech: ["Vue", "JavaScript", "Express"],
      github: "https://github.com/username/project2",
      demo: "https://project2.com"
    }
  ];

  const handleClick = (item: { title: string }, index: number) => {
    console.log(`Clicked on project: ${item.title}, at index: ${index}`);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} onClick={handleClick} />
      ))}
    </div>
  );
};

export default ProjectList;
