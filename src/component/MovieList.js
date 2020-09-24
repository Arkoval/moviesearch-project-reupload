import React from "react";
import Movie from "./Movie";

const MovieList = ({movies, viewPopup}) => {

    return (
        <div className="container">
            {movies.map((movie, i) => {
                return (
                    <Movie
                        key={i}
                        poster={movie.poster_path}
                        title={movie.title}
                        viewPopup={viewPopup}
                        movieId={movie.id}
                    />)
            })
            }
        </div>
    )
};

export default MovieList