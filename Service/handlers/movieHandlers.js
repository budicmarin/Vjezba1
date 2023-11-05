import { movies } from "../models/movieModel.js"; 

function getMovie(id) {
    if(!id) {
        return movies;
    }
    return movies.find(x => x.id == id);
}
function getMovies(rating, name) {
    if(!rating && !name) {
        return movies;
    }
    return movies.find(x => x.rating == id || x.title == name);
}
function calculateAvgRating() {
    let totalRatings = 0;
    let numMovies = movies.length;
    
    for (const movie of movies) {
        if (movie.rating) {
            totalRatings += movie.rating;
        }
    }

    if (numMovies === 0) {
        return 0; // To avoid division by zero
    }

    const averageRating = totalRatings / numMovies;
    return averageRating;
}
function addMovies(newMovie) {
    movies.push(newMovie);
    return;
}
function updateMovie(id, newMovieData) {
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1, newMovieData);
    return newMovieData;
}
function updatePartOfMovie(id, newMovieData) {
    let oldMovie = movies.find(x => x.id == id);
    let movieDetailsToChange = Object.keys(newMovieData);
    for(let movieDetail of movieDetailsToChange) {
        if(oldMovie[movieDetail]) {
            oldMovie[movieDetail] = newMovieData[movieDetail];
        }
    }
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1, oldMovie);
    return oldMovie;
}
function deleteMovie(id) {
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1);
    return;
}
function deleteMovies(ids){
    array=ids.split(',');
    array.forEach(id => {
        console.log(id);
        let oldMovieIdx=movies.findIndex(x=> x.id==id);
        movies.splice(oldMovieIdx,1);
        });
    return;
}
export const methods = {
    deleteMovies,
    calculateAvgRating,
    getMovie,
    getMovies,
    addMovies,
    updateMovie,
    updatePartOfMovie,
    deleteMovie,
}