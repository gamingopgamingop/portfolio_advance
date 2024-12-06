import { motion } from 'framer-motion';
import { Code2, Database, Palette, Server, Globe, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 className="w-8 h-8" />,
    items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Angular']
  },
  {
    category: 'Backend',
    icon: <Server className="w-8 h-8" />,
    items: ['Node.js', 'Django', 'Laravel', 'Ruby on Rails', 'Express']
  },
  {
    category: 'Database',
    icon: <Database className="w-8 h-8" />,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma']
  },
  {
    category: 'Design',
    icon: <Palette className="w-8 h-8" />,
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design']
  },
  {
    category: 'DevOps',
    icon: <Terminal className="w-8 h-8" />,
    items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Azure']
  },
  {
    category: 'Other',
    icon: <Globe className="w-8 h-8" />,
    items: ['GraphQL', 'REST APIs', 'WebSockets', 'Machine Learning']
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-cyan-500">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}