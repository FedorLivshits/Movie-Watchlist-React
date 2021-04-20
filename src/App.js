import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Header  from "./Components/Header";
import "./App.css";
import Watched from "./Components/Watched";
import AddFilm from "./Components/AddFilm";
import WatchList from "./Components/WatchList";


function App() {
  return (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <WatchList/>
            </Route>
            <Route path="/add">
              <AddFilm/>
            </Route>
            <Route path="/watched">
              <Watched/>
            </Route>
          </Switch>
        </Router>

  );
}

export default App;