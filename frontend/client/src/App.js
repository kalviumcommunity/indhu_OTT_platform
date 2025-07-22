import React from 'react';
import MovieList from './components/MovieList';
import ComicList from './components/ComicList';
import MusicList from './components/MusicList';

function App() {
  return (
    <div className="App">
      <h1>🎥 OTT Platform</h1>
      <MovieList />
      <ComicList />
      <MusicList />
    </div>
  );
}

export default App;
