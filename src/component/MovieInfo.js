import React from "react";

const MovieInfo = (props) => {

    return (
        <div className={'popup'}>
            <div className="popupContent">
                <h1>{props.selected.title} </h1>
                <span>({props.selected.release_date})</span>
                <p className={'rating'}>Rating: <span> {props.selected.vote_average}</span></p>

                <div className="plot">
                    {
                        props.selected.poster_path == null ? <img className={'poster'}
                                                                  src="https://s.tmimgcdn.com/scr/84100/strona-specjalna-cute-404-error-84122_84122-original.jpg"
                                                                  alt=""/> :
                            <img className={'poster'}
                                 src={`http://image.tmdb.org/t/p/w185${props.selected.poster_path}`} alt=""/>
                    }
                    <p>{props.selected.overview}</p>
                </div>
                <button className={'close'} onClick={props.closePopup}>Close</button>
                <a className={'yt'}
                   href={`https://www.youtube.com/results?search_query=${props.selected.title}+trailer`}
                   target={'_blank'}>Youtube trailer</a>
            </div>

        </div>
    )

};

export default MovieInfo