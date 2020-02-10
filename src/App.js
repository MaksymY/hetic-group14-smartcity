import React from "react";
import { Nav } from "./components/Nav"
import { DansMaRue } from "../src/views/DansMaRue";
import { JoEpreuve } from "../src/views/JoEpreuve";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="exemple">
            <Switch>
              <Route path="/" exact component={DansMaRue} />
              <Route path="/jo" component={JoEpreuve} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Router>
  );
}

export default App;
