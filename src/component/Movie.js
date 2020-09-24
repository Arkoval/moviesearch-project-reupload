import React, {Component} from "react";

export default class Movie extends Component {

    render() {
        const {id, poster, title, viewPopup, movieId} = this.props;
        return <div key={id} className="movieCard">
            {
                poster == null ? <img className={'poster'}
                                      src="https://s.tmimgcdn.com/scr/84100/strona-specjalna-cute-404-error-84122_84122-original.jpg"
                                      alt=""/> :
                    <img className={'poster'} src={`http://image.tmdb.org/t/p/w185${poster}`} alt=""/>
            }
            <a href='#' onClick={() => viewPopup(movieId)}>{title}</a>
        </div>
    }
}
