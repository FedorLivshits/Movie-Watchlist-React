import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Watched from "./Components/Watched";
import AddFilm from "./Components/AddFilm";
import WatchList from "./Components/WatchList";
import {GlobalProvider} from "./Context/StateContext";


function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header/>
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
        </GlobalProvider>
    );
}

export default App;