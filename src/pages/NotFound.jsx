import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-content not-found-page">
      <div className="not-found-card">
        <span className="badge badge-error">Error 404</span>
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-desc">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/blog" className="btn btn-secondary">
            Browse Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
