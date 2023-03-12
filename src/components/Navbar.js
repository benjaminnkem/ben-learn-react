import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <h1 id="logo"><Link to="/">Bblog</Link></h1>

        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/visitor">Visitor</Link>
            <a href="/">Chat</a>
            <Link to="/create">Create Blog</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
