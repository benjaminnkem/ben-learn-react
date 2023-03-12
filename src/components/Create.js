import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("benjamin");
  const history = useHistory();

  const [blogAddedSuccess, setBlogAddedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        setBlogAddedSuccess(true);
        setTimeout(() => {
          setBlogAddedSuccess(false);
          history.push("/");
        }, 2000);

        setTitle("");
        setBody("");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      {blogAddedSuccess && (
        <div>
          <p
            style={{
              backgroundColor: "lightgreen",
              color: "#333",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            Blog Added Successfully
          </p>
        </div>
      )}
      <h1>Create New Blog</h1>

      <form id="create_form" onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label>Blog Body</label>
        <textarea
          cols="30"
          rows="10"
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <label>Blog Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="benjamin">Benjamin</option>
          <option value="nkem">Nkem</option>
          <option value="milo">Milo</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
