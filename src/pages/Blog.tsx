import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet';
import { GetStaticProps } from 'next';
import React, { Component } from 'react';


// Debouncing function to handle search input changes
function useDebouncedValue(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface BlogProps {
  posts: BlogPost[];
}

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  image: string;
};


const blogPosts: BlogPost[] = [
  {
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    date: '2024-03-15',
    readTime: '5 min read',
    author: 'Sarthak Bansal',
    tags: ['React', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Modern CSS Techniques',
    excerpt: 'Explore modern CSS features and techniques for creating beautiful, responsive layouts.',
    date: '2024-03-10',
    readTime: '8 min read',
    author: 'Sarthak Bansal',
    tags: ['CSS', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Understanding JavaScript Closures',
    excerpt: 'A deep dive into closures, their uses, and how to effectively leverage them in your projects.',
    date: '2024-02-25',
    readTime: '6 min read',
    author: 'Sarthak Bansal',
    tags: ['JavaScript', 'Closures'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Building Restful APIs with Node.js',
    excerpt: 'Learn the fundamentals of building and deploying RESTful APIs using Node.js and Express.',
    date: '2024-02-18',
    readTime: '7 min read',
    author: 'Sarthak Bansal',
    tags: ['Node.js', 'APIs'],
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Web Accessibility: Making the Web Inclusive',
    excerpt: 'Tips and best practices for designing accessible websites for all users.',
    date: '2024-02-10',
    readTime: '9 min read',
    author: 'Sarthak Bansal',
    tags: ['Accessibility', 'Design'],
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Introduction to Vue 3 Composition API',
    excerpt: 'Explore the power of Vue 3 Composition API and how it simplifies component logic.',
    date: '2024-01-30',
    readTime: '8 min read',
    author: 'Sarthak Bansal',
    tags: ['Vue', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Optimizing Website Performance',
    excerpt: 'Techniques to improve page load times and ensure a seamless user experience.',
    date: '2024-01-20',
    readTime: '6 min read',
    author: 'Sarthak Bansal',
    tags: ['Performance', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Exploring TypeScript Generics',
    excerpt: 'Understand TypeScript generics and how they enable type-safe, reusable code.',
    date: '2024-01-10',
    readTime: '5 min read',
    author: 'Sarthak Bansal',
    tags: ['TypeScript', 'Generics'],
    image: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Mastering React Hooks',
    excerpt: 'Learn how to use React Hooks effectively to manage state and side effects.',
    date: '2024-03-05',
    readTime: '7 min read',
    author: 'Sarthak Bansal',
    tags: ['React', 'Hooks'],
    image: 'https://images.unsplash.com/photo-1605508827395-6eeb48b9da2b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Node.js vs Deno: Which to Choose?',
    excerpt: 'Compare Node.js and Deno for building modern web applications and understand their differences.',
    date: '2024-03-01',
    readTime: '6 min read',
    author: 'Sarthak Bansal',
    tags: ['Node.js', 'Deno'],
    image: 'https://images.unsplash.com/photo-1576587251282-6b7e1b39a77d?auto=format&fit=crop&q=80&w=800'
  }
];

// Blog component
export function Blog({ posts }: BlogProps) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate API delay
  }, []);

  useEffect(() => {
    // Simulating API error handling
    try {
      // Simulate an error after 5 seconds
      setTimeout(() => {
        setError('Failed to fetch blog posts. Please try again later.');
      }, 5000);
    } catch (err) {
      setError('An error occurred while fetching blog posts.');
    }
  }, []);

  if (error) {
    return <p className="text-center text-xl text-red-500">{error}</p>;
  }

  if (!posts || posts.length === 0) {
    return <p className="text-center text-xl text-gray-600">No posts available.</p>;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="space-y-6">
            {/* Skeleton Loader */}
            <div className="bg-gray-200 animate-pulse rounded-xl p-6">
              <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
              <div className="h-6 w-3/4 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
            </div>
            <div className="bg-gray-200 animate-pulse rounded-xl p-6">
              <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
              <div className="h-6 w-3/4 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover"
                  aria-label={`Image for ${post.title}`}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// BlogSearch component
function BlogSearch({
  searchTerm,
  onSearchChange,
  tags,
  selectedTag,
  onTagChange
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  tags: string[];
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-4">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search for posts"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-cyan-500"
          aria-label="Search blog posts"
        />
      </div>
      <div className="flex items-center gap-4">
        <select
          value={selectedTag || ''}
          onChange={(e) => onTagChange(e.target.value || null)}
          className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-cyan-500"
          aria-label="Filter posts by tag"
        >
          <option value="">All Tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// BlogPage component
export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const postsPerPage = 4;

  const tags = ['React', 'Node.js', 'JavaScript', 'CSS', 'TypeScript', 'Vue'];

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);

  // Filter posts based on search and selected tag
  const filteredPosts = blogPosts.filter((post) => {
    const isMatchingSearch =
      post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
    const isMatchingTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return isMatchingSearch && isMatchingTag;
  });

  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  // Paginate
  useEffect(() => {
    console.log('Filtered Posts:', filteredPosts);
    const newVisiblePosts = sortedPosts.slice(
      currentPage * postsPerPage,
      (currentPage + 1) * postsPerPage
    );
    console.log('Visible Posts:', newVisiblePosts); // Add log to see the sliced posts
    setVisiblePosts(newVisiblePosts);
  }, [currentPage, sortedPosts]);
  console.log('Filtered Posts:', filteredPosts);


  // Handle page change
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto py-10 px-4">
	   <Helmet>
        <title>Blog Page - Sarthak Bansal</title>
        <meta name="description" content="Learn programming, web development, and more with articles by Sarthak Bansal." />
        <meta name="keywords" content="React, JavaScript, Node.js, CSS, TypeScript, web development, programming blog" />
        <meta property="og:title" content="Blog - Sarthak Bansal" />
        <meta property="og:description" content="Learn programming and development topics in this blog by Sarthak Bansal." />
      </Helmet>

      <BlogSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        tags={tags}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
      />
      <Blog posts={visiblePosts} />
      {filteredPosts.length > postsPerPage && (
        <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(filteredPosts.length / postsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'previous'}
            nextClassName={'next'}
            disabledClassName={'disabled'}
          />

      )}
    </div>
  );
}

class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error caught in error boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
