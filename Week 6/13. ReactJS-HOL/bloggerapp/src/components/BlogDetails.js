import React from 'react';
import { blogs } from '../data/blogs';

// Using separate helper function and returning null to prevent rendering
const renderBlog = (blog) => {
  if (!blog) return null;
  
  return (
    <div key={blog.id} className="card">
      <h3>{blog.title}</h3>
      <p><strong>Author:</strong> {blog.author}</p>
      <p>{blog.description}</p>
    </div>
  );
};

const BlogDetails = () => {
  const hasBlogs = blogs && blogs.length > 0;
  
  // Using logical AND (&&) for conditional rendering
  return (
    <div className="section">
      <h2>Blog Details</h2>
      {hasBlogs && blogs.map(renderBlog)}
      {!hasBlogs && <p>No blogs to display.</p>}
    </div>
  );
};

export default BlogDetails;
