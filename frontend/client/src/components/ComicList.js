import React from 'react';

function ComicList() {
  const comics = ['Batman: Year One', 'Spider-Man', 'Avengers'];

  return (
    <div>
      <h2>Comics</h2>
      <ul>
        {comics.map((comic, index) => (
          <li key={index}>{comic}</li>
        ))}
      </ul>
    </div>
  );
}

export default ComicList;
