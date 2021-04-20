import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";


const initialState = {
    watchList: [],
    watched: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    return (
        <GlobalContext.Provider
            value={{
                watchList: state.watchList,
                watched: state.watched,
                addMovieToWatchlist,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};