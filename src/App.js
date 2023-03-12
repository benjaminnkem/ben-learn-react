import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import CreateBlog from "./components/pages/Create";
import VisitorHome from "./components/visitor/Home";

function App() {
  return (
    <Router>
      <div id="content">
        <div className="navbar__con">
          <Navbar />
        </div>
        <main>
          <div className="main_con">
            <Switch>
              <Route exact path="/">
                <Feed />
              </Route>
              <Route path="/create">
                <CreateBlog />
              </Route>
              <Route path="/visitor/:id">
                <VisitorHome />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
