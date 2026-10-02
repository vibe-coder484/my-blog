import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page-content about-page">
      <header className="page-header">
        <span className="badge">About Us</span>
        <h1>About ModernBlog</h1>
        <p className="page-lead">
          A publication dedicated to frontend craftsmanship, architecture, and developer experience.
        </p>
      </header>

      <section className="about-details">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            ModernBlog was established to share practical, tested web development knowledge.
            From mastering dynamic routing with React Router to implementing resilient frontend patterns,
            our goal is to break down complex technical topics into clear, digestible guides.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>⚡ Performance First</h3>
            <p>
              Leveraging single page application architectures, instant page transitions without full page reloads,
              and optimized client-side routing.
            </p>
          </div>

          <div className="about-card">
            <h3>🎨 Thoughtful Design</h3>
            <p>
              Emphasizing clean typography, harmonious color palettes, fluid layouts, and intuitive navigation.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <h2>Ready to dive in?</h2>
          <p>Browse our collection of articles or head back to the homepage.</p>
          <div className="hero-actions">
            <Link to="/blog" className="btn btn-primary">
              View Blog Articles &rarr;
            </Link>
            <Link to="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
