import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFount = () => {
  return (
    <div className="not-found">
      <h1>Sorry</h1>
      <p>This page does not exist</p>

      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFount;
