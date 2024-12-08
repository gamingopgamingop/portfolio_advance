// import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import  { useState , useEffect , useMemo} from 'react';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-48">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
  </div>
);

// Button Component (Reusable)
const Button = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`${className} px-4 py-2 rounded`}
    aria-label={label}
  >
    {label}
  </button>
);

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered prioritization',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'TypeScript', 'OpenAI', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Redux', 'D3.js', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Weather App',
    description: 'Beautiful weather application with detailed forecasts',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'TypeScript', 'OpenWeather API', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Comprehensive analytics platform with real-time data visualization, custom reporting, and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'D3.js', 'WebSocket', 'Redis', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Smart Home IoT Platform',
    description: 'IoT platform for smart home automation with real-time device control and energy consumption analytics.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'AI-Powered Code Assistant',
    description: 'Developer tool that provides intelligent code suggestions and automated code review using machine learning.',
    image: 'https://images.unsplash.com/photo-1542831371-32f555c86880?auto=format&fit=crop&q=80&w=800',
    tech: ['TypeScript', 'Python', 'TensorFlow', 'FastAPI', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Blockchain Trading Platform',
    description: 'Cryptocurrency trading platform with real-time market data and automated trading strategies.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Web3.js', 'Solidity', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}


export function Projects() {

  const [projects, setProjects] = useState(projectsData);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true'); // Check if dark mode is set in local storage
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  // Simulate loading and apply filter
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulated delay
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(() =>
  filter === 'All' ? projects : projects.filter((project) => project.tech.includes(filter)),
  [filter, projects]
);

  if (loading) {
    return <LoadingSpinner />;
  }

  useEffect(() => {
  localStorage.setItem('darkMode', darkMode.toString()); // Save dark mode preference
}, [darkMode]);

  return (
    <div className={`pt-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-gray-300">
              A showcase of my latest work and side projects
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <div className="flex gap-4 mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white"
            aria-label="Filter Projects"
          >
            <option value="All">All</option>
            <option value="React">React</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
          </select>
          <Button
          label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onClick={() => setDarkMode((prev) => !prev)}
          className="border border-gray-400"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          />
        </div>
        </div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      </div>
  );
}

function ProjectCard({ title, description, image, tech, github, demo }: ProjectCardProps) {
  console.log(`Rendering ProjectCard:`, { title, description, tech, github, demo }); // For debugging props

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" id={`project-card-${title.replace(/\s+/g, '-').toLowerCase()}`} data-testid={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}

>
      <img src={image} alt={`Screenshot of ${title}`} className="w-full h-48 object-cover"  loading="lazy" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x400')}
 />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
