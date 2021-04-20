import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import Watched from "./Components/Watched";
import AddFilm from "./Components/AddFilm";
import WatchList from "./Components/WatchList";
import {GlobalProvider} from "./Context/StateContext";


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
                    <footer className="footer">
                        <div className="container">
                            <div className="footer-inner">
                                <div className="footer-info">
                                    <p>This app use <a
                                        href="https://developers.themoviedb.org/3/getting-started/introduction">The
                                        Movie Database API</a></p>
                                    <p>App made by <a href="https://github.com/FedorLivshits/Movie-Watchlist-React">Fedor
                                        Livshits</a></p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

            </Router>
        </GlobalProvider>
    );
}

export default App;