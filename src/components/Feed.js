import { Link } from "react-router-dom";
import useMyFetch from "./MyFetcher";

const Feed = () => {
  const {
    data: blogs,
    isPending,
    error,
    setData: setBlogs,
  } = useMyFetch("http://localhost:8000/blogs");

  function deleteBlog(blogId) {
    const newBlog = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(newBlog);
  }

  return (
    <div>
      <h1>FEED FOR YOU TODAY</h1>
      <div id="feed">
        {error && <div>An error occurred while fetching this resource</div>}
        {isPending && <div id="loader__icon"></div>}
        {!isPending &&
          blogs &&
          blogs.map((blog) => {
            return (
              <div key={blog.id} className="blog_preview">
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>

                <Link to={`/visitor/${blog.id}`}>Visit</Link>

                <button onClick={() => deleteBlog(blog.id)}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Feed;
