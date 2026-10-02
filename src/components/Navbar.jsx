import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar" aria-label="Main Navigation">
        <Link to="/" className="navbar-brand">
          <span className="brand-logo">✨</span>
          <span className="brand-text">ModernBlog</span>
        </Link>

        <ul className="navbar-links">
          <li>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
