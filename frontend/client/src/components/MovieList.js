import React from 'react';

function MovieList() {
  const movies = ['Inception', 'Interstellar', 'The Dark Knight'];

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
