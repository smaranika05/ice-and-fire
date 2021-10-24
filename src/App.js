import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterListing from "./containers/CharacterListing";
import Header from "./containers/Header";
import "./App.css";
import CharacterDetails from "./containers/CharacterDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={CharacterListing} />
          <Route path="/character/:characterId" component={CharacterDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
