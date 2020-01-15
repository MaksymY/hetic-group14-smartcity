import React from "react";
import { Nav } from "./components/Nav";
import { DansMaRue } from "../src/views/DansMaRue";
import { JoEpreuve } from "../src/views/JoEpreuve";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={DansMaRue} />
          <Route path="/jo" component={JoEpreuve} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
