import React, {Component} from "react";
import ReactDOM from "react-dom";
import 'reset-css';
import './index.css';
import MovieList from './component/MovieList';
import Search from "./component/Search";
import MovieInfo from './component/MovieInfo';
import Pagination from "./component/Pagination";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            search: '',
            selected: null,
            currentPage: 1,
            results: 0,
            genres: [],
            selectedGenre: '',

        };
        this.apiUrl = '5225ac57139869fdc409e5ab72f214fd';
    };

    handleInput = e => {
        e.preventDefault()
        this.setState({search: [e.target.value]})
    };

    randomMovie = e => {
        e.preventDefault()
        const randomPage = Math.random() * (500 - 1) + 1;
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiUrl}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&page=${randomPage}&with_genres=${this.state.selectedGenre}`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                this.setState({movies: data.results})

            })
    };

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiUrl}&language=en-US`)
            .then(data => data.json())
            .then(data => {
                this.setState({genres: data.genres})
            })
    }

    handleSelect = e => {
        e.preventDefault()
        this.setState({selectedGenre: [e.target.value]})
        console.log(this.state.selectedGenre)
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiUrl}&query=${this.state.search}`)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results], results: data.total_results})
            })
    };
    //############  Na przyszłość do seriali  ###########
    // handleSubmitTv = e => {
    //     e.preventDefault()
    //     fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiUrl}&query=${this.state.search}`)
    //         .then(data => data.json())
    //         .then(data => {
    //             this.setState({movies: [...data.results], results: data.total_results})
    //         })
    //
    // }

    nextPage = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiUrl}&query=${this.state.search}&page=${pageNumber}`)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results], currentPage: pageNumber})

            });
    };

    viewPopup = id => {
        const filterMovie = this.state.movies.filter(movie => movie.id === id);
        const newSelected = filterMovie.length > 0 ? filterMovie[0] : null;
        this.setState({selected: newSelected})
    };

    closePopup = () => {
        this.setState({selected: null})
    };

    render() {
        const numberPages = Math.floor(this.state.results / 20);
        return (
            <>
                <header>
                    <h1>Movies Search</h1>
                </header>
                {this.state.selected == null ? <main>
                        <Search handleSubmit={this.handleSubmit}
                                handleInput={this.handleInput}
                                randomMovie={this.randomMovie}
                                handleSelect={this.handleSelect}
                                genres={this.state.genres}
                                selectedGenre={this.state.selectedGenre}
                        />
                        <MovieList viewPopup={this.viewPopup} movies={this.state.movies}/>
                    </main> :
                    <MovieInfo genres={this.state.genres} selected={this.state.selected} closePopup={this.closePopup}/>}
                {this.state.results > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : null}
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
