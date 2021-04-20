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
    const removeMovieToWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_TO_WATCHLIST", payload: id });
    };
    return (
        <GlobalContext.Provider
            value={{
                watchList: state.watchList,
                watched: state.watched,
                addMovieToWatchlist,
                removeMovieToWatchlist
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};