import { Link } from 'react-router-dom';
import posts from '../data/posts';

export default function BlogList() {
  return (
    <div className="page-content blog-list-page">
      <header className="page-header">
        <span className="badge">Articles</span>
        <h1>The Blog</h1>
        <p className="page-lead">
          Explore all our articles and tutorials on React, routing, and modern frontend design.
        </p>
      </header>

      <div className="blog-posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-card-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-author">By {post.author}</span>
            </div>

            <h2 className="post-card-title">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>

            <p className="post-card-summary">{post.summary}</p>

            <div className="post-card-footer">
              <span className="post-id-badge">ID: {post.id}</span>
              <Link to={`/blog/${post.id}`} className="read-article-link">
                Read Full Post &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
