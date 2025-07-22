import React from 'react';

function MusicList() {
  const tracks = ['Inception OST', 'Interstellar Theme', 'Time'];

  return (
    <div>
      <h2>Music</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ul>
    </div>
  );
}

export default MusicList;
