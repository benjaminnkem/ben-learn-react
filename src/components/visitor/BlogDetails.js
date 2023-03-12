import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useMyFetch from "../MyFetcher";

const VisitorHome = () => {
  const { id } = useParams();
  const { data: post, isPending, error } = useMyFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  function deleteBlog() {
    fetch("http://localhost:8000/blogs/" + post.id, {
      method: "DELETE",
    }).then(() => {
      history.push('/');
      console.log("Post deleted");
    });
  }

  return (
    <div>
      <h1>Hello visitor with id: {id}</h1>

      <div>
        {error && <div>An error occurred while fetching this resource</div>}
        {isPending && <div id="loader__icon"></div>}
        <div key={post.id}>
          <h2 style={{ fontWeight: "lighter" }}>{post.title}</h2>
          <p>{post.body}</p>

          <button onClick={deleteBlog}>Delete this blog</button>
        </div>
      </div>
    </div>
  );
};

export default VisitorHome;
