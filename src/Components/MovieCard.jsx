import React from "react";
import {MovieControls} from "./MovieControls";


export const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>
            <div className="inner-card-title">
                <h3 className="title">
                    {movie.title}
                </h3>
                <p>{movie.overview}</p>
            </div>

            {movie.poster_path
                ?
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                :
                <div className="none-img"></div>
            }


            <MovieControls type={type} movie={movie} />
        </div>
    );
};

export default MovieCard