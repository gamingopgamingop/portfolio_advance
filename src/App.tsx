import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { BackendStatus } from './components/BackendStatus';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
// import { Projects } from './components/Projects';
// import ProjectList from './components/ProjectList';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
          <BackendStatus />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

// const ProjectDisplay: React.FC = () => {  // Renamed this component to `ProjectDisplay`
//   const projects = []; // Add your project data here
//   return (
//     <div>
//       {projects.map((project, index) => (
//         <Project key={index} {...project} />
//       ))}
//       <ProjectList />
//     </div>
//   );
// };

export default App; // Only export App component
