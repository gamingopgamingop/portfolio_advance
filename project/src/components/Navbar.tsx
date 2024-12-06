import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-cyan-500">
            Portfolio
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/projects" active={isActive('/projects')}>Projects</NavLink>
            <NavLink to="/blog" active={isActive('/blog')}>Blog</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" active={isActive('/')} onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" active={isActive('/about')} onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink to="/projects" active={isActive('/projects')} onClick={() => setIsMenuOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink to="/blog" active={isActive('/blog')} onClick={() => setIsMenuOpen(false)}>
                Blog
              </MobileNavLink>
              <MobileNavLink to="/contact" active={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`${
        active ? 'text-cyan-500' : 'text-gray-600'
      } hover:text-cyan-500 transition-colors`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  to,
  active,
  onClick,
  children
}: {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 text-base font-medium ${
        active ? 'text-cyan-500 bg-gray-50' : 'text-gray-600'
      } hover:text-cyan-500 hover:bg-gray-50 rounded-md`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}