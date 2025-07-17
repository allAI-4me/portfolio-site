import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Projects', path: '/projects' },
  { label: 'Publications', path: '/publications' },
  { label: 'Talks & Teaching', path: '/talks' },
  { label: 'Awards', path: '/awards' },
  { label: 'Work With Me', path: '/work' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          Dr. Rumana Pathan
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`text-sm font-medium transition hover:text-primary ${
                location.pathname === path ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
