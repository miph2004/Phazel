import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import SortAlgo from "./containers/SortAlgo/SortAlgo";
import PathfindingAlgo from "./containers/PathfindingAlgo/PathfindingAlgo";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Route path="/sortalgo" exact component={SortAlgo} />
        <Route path="/pathfindingalgo" exact component={PathfindingAlgo} />
      </Router>
    </div>
  );
}

export default App;
