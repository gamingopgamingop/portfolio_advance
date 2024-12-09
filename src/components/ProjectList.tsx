// In ProjectList.tsx
//import React from 'react';
import ProjectCard from './Projects'; // Make sure the path is correct

interface ProjectData {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

interface ProjectListProps {
  projects: ProjectData[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.title} // or use a unique identifier if available
          title={project.title}
          description={project.description}
          image={project.image}
          tech={project.tech}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </div>
  );
};

export default ProjectList;
