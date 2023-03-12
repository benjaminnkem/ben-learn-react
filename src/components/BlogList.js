const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="blog_preview">
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
