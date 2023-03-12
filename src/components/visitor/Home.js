import { useParams } from "react-router-dom";
import useMyFetch from "../MyFetcher";

const VisitorHome = () => {
  const { id } = useParams();
  const {
    data: posts,
    isPending,
    error,
  } = useMyFetch("http://localhost:8000/blogs");

  return (
    <div>
      <h1>Hello visitor with id: {id}</h1>

      <div>
        {error && <div>An error occurred while fetching this resource</div>}
        {isPending && <div id="loader__icon"></div>}
        {posts
          .filter((post) => post.id === Number.parseInt(id))
          .map((post) => {
            return (
              <div key={post.id}>
                <h2 style={{ fontWeight: "lighter" }}>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VisitorHome;
