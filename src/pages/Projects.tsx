// import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import  { useState , useEffect , useMemo} from 'react';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-48">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
  </div>
);

interface ButtonProps {
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
  ariaLabel: string;
  disabled?: boolean;
}

// Button Component (Reusable)
const Button = ({ label, onClick, className, ariaLabel, disabled }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`${className} px-4 py-2 rounded hover:bg-gray-800 ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    aria-label={ariaLabel}
    disabled={disabled}
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
  },
  {
    title: 'AR Navigation App',
    description: 'Augmented reality-based navigation app for real-time directions',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'AR.js', 'Mapbox', 'Firebase'],
    github: 'https://github.com/your-github-repo-link',
    demo: 'https://your-live-demo-link'
  },
  {
    title: 'Online Learning Platform',
    description: 'An interactive online platform for courses and live sessions',
    image: 'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/your-github-repo-link',
    demo: 'https://your-live-demo-link'
  },
  {
    title: 'Task Automation Tool',
    description: 'Automation tool to schedule and execute repetitive tasks',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    tech: ['Node.js', 'Python', 'Docker', 'Redis'],
    github: 'https://github.com/your-github-repo-link',
    demo: 'https://your-live-demo-link'
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A real-time chat app with support for private and group messages, user authentication, and notifications.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'Express.js', 'WebSockets', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Expense Tracker App',
    description: 'A web app to track personal expenses and generate reports with data visualizations.',
    image: 'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Social Media Dashboard',
    description: 'A dashboard to manage social media posts, schedule content, and analyze engagement across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OAuth2.0'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase skills, projects, and achievements with responsive design and interactive UI.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Weather Forecast App',
    description: 'A weather app that shows real-time weather information and forecasts using an external API.',
    image: 'https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'OpenWeatherMap API'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Blog Website',
    description: 'A blogging website with a simple and clean design for publishing articles and interacting with readers.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['WordPress', 'PHP', 'MySQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Fitness Tracker App',
    description: 'A mobile app that helps users track their fitness activities, goals, and progress over time.',
    image: 'https://images.unsplash.com/photo-1508317469940-e3de49ba902e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Recipe Finder App',
    description: 'A recipe search app that helps users find recipes based on ingredients and preferences.',
    image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'Edamam API'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Music Streaming App',
    description: 'A music streaming platform with support for playlists, search, and user recommendations.',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'Spotify API', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Personal Finance Dashboard',
    description: 'A dashboard to track personal finances, including income, expenses, and investments.',
    image: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
	 title: 'AI-Powered Content Generator',
	 description: 'A web app that generates high-quality articles based on user input using AI.',
	 image: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	 tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
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
  const [buttonLoading, setButtonLoading] = useState(false); // New loading state for the button


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

// Handle dark mode toggle with button loading state
const handleDarkModeToggle = () => {
  setButtonLoading(true); // Set the button to loading state
  setDarkMode((prev) => !prev); // Toggle dark mode
  setTimeout(() => {
    setButtonLoading(false); // Reset loading state after a short delay
  }, 500); // Simulate a delay for the toggle action
};

useEffect(() => {
  localStorage.setItem('darkMode', darkMode.toString()); // Save dark mode preference
}, [darkMode]);

if (loading) {
  return <LoadingSpinner />;
}

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
            aria-label="Filter projects by technology or stack"
          >
            <option value="All">All</option>
            <option value="React">React</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
          </select>
          <Button label={ buttonLoading ? (<span className="flex items-center gap-2"> <Spinner /> Switching... </span>) : darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
  }
        onClick={handleDarkModeToggle}
        className="border border-gray-400"
        ariaLabel={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        disabled={buttonLoading} />
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
  const [IsImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105" id={`project-card-${title.replace(/\s+/g, '-').toLowerCase()}`} data-testid={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}

>
      <img src={image} alt={`Screenshot of ${title}`} className="w-full h-48 object-cover"  loading="lazy" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x400')} onLoad={() => setIsImageLoaded(true)}

 />
      <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 dark:text-black tracking-wide px-4 py-2 transition-all duration-300 ease-in-out hover:text-gray-300 dark:hover:text-gray-500 shadow-md rounded-lg">{title}</h3>
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

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8H4z"
    ></path>
  </svg>
);
