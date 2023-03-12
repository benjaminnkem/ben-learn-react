import { Link } from "react-router-dom";
import useMyFetch from "./MyFetcher";

const Feed = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useMyFetch("http://localhost:8000/blogs");

  return (
    <div id="feed">
      <h1>FEED FOR YOU TODAY</h1>
      <div>
        {error && <div>An error occurred while fetching this resource</div>}
        {isPending && <div id="loader__icon"></div>}
        <div id="blogs_showcase">
          {!isPending &&
            blogs &&
            blogs.map((blog) => {
              return (
                <div key={blog.id} className="blog_preview">
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>

                  <Link to={`/visitor/${blog.id}`} style={{ padding: "20px" }}>
                    Visit
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
