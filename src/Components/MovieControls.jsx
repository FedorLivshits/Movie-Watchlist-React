import React, { useContext } from "react";
import {GlobalContext} from "../Context/StateContext";

export const MovieControls = ({ type, movie }) => {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        returnToWatchlist,
        removeMovieFromWatched,
    } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => returnToWatchlist(movie)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatched(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};