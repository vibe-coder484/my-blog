import { useParams, useNavigate } from 'react-router-dom';
import posts from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((item) => String(item.id) === String(id));

  const handleBackToBlog = () => {
    navigate('/blog');
  };

  if (!post) {
    return (
      <div className="page-content blog-post-page not-found-state">
        <header className="page-header">
          <span className="badge badge-warning">Post Not Found</span>
          <h1>Article Not Found</h1>
          <p>Post ID: {id}</p>
        </header>

        <p className="not-found-desc">
          We couldn&apos;t find an article matching ID &ldquo;{id}&rdquo;. It might have been moved or removed.
        </p>

        <div className="post-actions">
          <button type="button" onClick={handleBackToBlog} className="btn btn-primary">
            &larr; Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="page-content blog-post-page">
      <div className="post-navigation-top">
        <button type="button" onClick={handleBackToBlog} className="btn-back">
          &larr; Back to Blog
        </button>
      </div>

      <header className="post-header">
        <div className="post-meta-details">
          <span className="badge">Article</span>
          <p className="post-id-text">Post ID: {id}</p>
        </div>

        <h1 className="post-title">{post.title}</h1>

        <div className="post-byline">
          <div className="author-avatar">
            {post.author
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <div>
            <div className="post-author-name">{post.author}</div>
            <div className="post-publish-date">{post.date}</div>
          </div>
        </div>
      </header>

      <div className="post-body">
        <p className="post-lead-paragraph">{post.summary}</p>
        <p className="post-main-content">{post.body}</p>
      </div>

      <footer className="post-footer">
        <div className="post-actions">
          <button type="button" onClick={handleBackToBlog} className="btn btn-primary">
            &larr; Back to Blog
          </button>
        </div>
      </footer>
    </article>
  );
}
