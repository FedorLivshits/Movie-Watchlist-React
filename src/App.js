import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import Watched from "./Components/Watched";
import AddFilm from "./Components/AddFilm";
import WatchList from "./Components/WatchList";
import {GlobalProvider} from "./Context/StateContext";
import Footer from "./Components/Footer";



function App() {
    return (
        <GlobalProvider>
            <Router>
                <div className="app">
                    <Header/>
                    <Switch>
                        <Route path="/watchlist">
                            <WatchList/>
                        </Route>
                        <Route exact path="/">
                            <AddFilm/>
                        </Route>
                        <Route path="/watched">
                            <Watched/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </GlobalProvider>
    );
}

export default App;