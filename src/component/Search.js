import React from "react";

function Search({handleInput, handleSubmit, randomMovie,selectedGenre, genres, handleSelect}) {

    return (<div >

            <form className={'search'} onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    className={'searchInput'}
                    placeholder={"Don't be shy, write something"}
                    onChange={handleInput}/>
                    <button className={'searchBtn btn'}>Search</button>
            </form>
            <div className={'randomSearch'}>
                <h1>Look for random</h1>
                <button className={'random btn'} onClick={randomMovie}>Give me random movies!</button>
                <select className={'randomSelect'} value={selectedGenre} onChange={handleSelect}>
                    {genres.map((genre,i) =>
                      <option key={i} value={genre.id} >{genre.name}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Search