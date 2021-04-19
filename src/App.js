import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Header  from "./Components/Header";
import "./App.css";




function App() {
  return (

        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              n
            </Route>
            <Route path="/add">
      h
            </Route>
            <Route path="/watched">
            n
            </Route>
          </Switch>
        </Router>

  );
}

export default App;