import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";


const initialState = {
    watchList: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList"))
        : [],
    watched: localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : [],
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };
    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    };
    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
    };
    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    };
    const returnToWatchlist = (movie) => {
        dispatch({ type: "RETURN_TO_WATCH_LIST", payload: movie });
    };
    return (
        <GlobalContext.Provider
            value={{
                watchList: state.watchList,
                watched: state.watched,
                addMovieToWatchlist,
                removeMovieFromWatchlist,
                removeMovieFromWatched,
                addMovieToWatched,
                returnToWatchlist
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};