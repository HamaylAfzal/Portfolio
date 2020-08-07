import React from "react";
import Nav from "./component/Nav";
import Resume from "./component/Resume";
import Page2 from "./component/Page2";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Page2" component={Page2} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
