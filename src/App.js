import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./containers/About/about";
import NavBar from "./components/NavBar/NavBar";
import SortAlgo from "./containers/SortAlgo/SortAlgo";
import PathfindingAlgo from "./containers/PathfindingAlgo/PathfindingAlgo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/sortalgo" exact component={SortAlgo} />
          <Route path="/pathfindingalgo" exact component={PathfindingAlgo} />
          <Route path="/" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
