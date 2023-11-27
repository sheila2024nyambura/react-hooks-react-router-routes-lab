import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems = movies.map((movie) => (
    <div key={movie.title}>
     {movie.title}
     {movie.time}
     <ul>
       {movie.genres.map((genre) => (
         <li key={genre}>{genre}</li>
       ))}
     </ul>
   </div>
 ))
 return (
 <div>
    <h2>Movies Page</h2>
  {movieItems}
 </div>
 );
}

export default Movies;
