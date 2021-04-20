import React, {useContext} from 'react';
import {GlobalContext} from "../Context/StateContext";

const ResultCard = ({movie}) => {
    const {
        addMovieToWatchlist,
        sendMovieToWatchlist,
        watchList,
        watched,
    } = useContext(GlobalContext);

    let storedMovie = watchList.find((o) => o.id === movie.id);
    let storedMovieWatched = watched.find((o) => o.id === movie.id);


    const watchlistDisabled = storedMovie ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path
                    ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                )
                    : (
                        <div className="filler-poster">
                        </div>
                    )
                }
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">
                        {movie.title}
                    </h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.slice(0,4) : ""}
                    </h4>
                </div>
               <div className="controls">
                   <button className="btn result" onClick={() => addMovieToWatchlist(movie)} disabled={watchlistDisabled}>
                       Add to watchlist
                   </button>
                   <button className="btn result" disabled={watchedDisabled} onClick={() => sendMovieToWatchlist(movie)}>
                       Add to Watched
                   </button>
               </div>

            </div>
        </div>
    );
};

export default ResultCard;
