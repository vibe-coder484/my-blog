import { Link } from 'react-router-dom';
import posts from '../data/posts';

export default function Home() {
  const featuredPosts = posts.slice(0, 2);

  return (
    <div className="page-content home-page">
      <section className="hero-section">
        <span className="badge">Welcome to ModernBlog</span>
        <h1 className="hero-title">Insights, Stories &amp; Web Development Ideas</h1>
        <p className="hero-subtitle">
          Explore modern web development tutorials, deep-dives into React Router, state management,
          and frontend design craftsmanship.
        </p>
        <div className="hero-actions">
          <Link to="/blog" className="btn btn-primary">
            Explore All Posts &rarr;
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About the Author
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Articles</h2>
        <div className="cards-grid">
          {featuredPosts.map((post) => (
            <article key={post.id} className="card">
              <span className="card-tag">Post #{post.id}</span>
              <h3 className="card-title">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="card-summary">{post.summary}</p>
              <div className="card-footer">
                <span className="card-author">By {post.author}</span>
                <Link to={`/blog/${post.id}`} className="read-more-link">
                  Read article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
