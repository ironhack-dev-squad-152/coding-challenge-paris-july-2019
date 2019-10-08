import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Temperature from "./Temperature";
import CustomizeImage from "./CustomizeImage";
import Celebrities from "./Celebrities";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <NavLink className="navbar__link" exact to="/">
          Home
        </NavLink>
        <NavLink className="navbar__link" exact to="/temperature">
          Temperature
        </NavLink>
        <NavLink className="navbar__link" exact to="/customize-image">
          Customize Image
        </NavLink>
        <NavLink className="navbar__link" exact to="/celebrities">
          Celebrities
        </NavLink>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/temperature" exact component={Temperature} />
          <Route path="/customize-image" exact component={CustomizeImage} />
          <Route path="/celebrities" exact component={Celebrities} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
