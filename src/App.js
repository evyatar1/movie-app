import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

function App() {
 const [movies, setMovies] = useState([]);
 const [searchValue , setSearchValue] = useState('');
 const [favorites , setFavorites] = useState([]);


const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a64b43f0`;

  //fetch data
  const response = await fetch(url);
  const responseJson = await response.json();

  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
};

// on change - whenever searchValue is changes then it will call to the function.
useEffect(()=> {
  getMovieRequest(searchValue);
} , [searchValue]);

const AddFavoriteMovie = (movie) => {
  const newFavoriteList = [...AddFavorites, movie];
  setFavorites(newFavoriteList);
}



  return (
    <div className='container-fluid movie-app'>
    <div className = "row d-flex align-items-center mt-4 mb-4">
       <MovieListHeading heading="Movies"/>
       <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
  
      <div className="row">
        <MovieList 
          movies = {movies}
          handleFavoritesClick = {AddFavoriteMovie}
          favoriteComponent = {AddFavorites}
        />
      </div>
    </div>
  );
}

export default App;
