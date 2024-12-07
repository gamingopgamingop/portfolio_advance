import ProjectCard from './Projects'; // Make sure the path is correct for ProjectCard component

interface ProjectData {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

const ProjectList: React.FC = () => {
  const projects: ProjectData[] = [
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

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
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
