import React, { useState } from 'react';
import './App.css';
import React, { useState } from 'react';
import React, {useState} from 'react';
import './App.css';
import SearchBar from './componets/searchBar/searchBar';
function App() {
  // This is where we will store the results from Spotify later
  const [searchResults, setSearchResults] = useState([
    { name: 'Example Song', artist: 'Example Artist', album: 'Example Album', id: 1 }
  ]);
  
  // This tracks the name of the user's custom playlist
  const [playlistName, setPlaylistName] = useState('My New Playlist');
  
  // This tracks which songs the user has added to their playlist
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
      return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar /> {/* Add this line */}
        <div className="App-playlist">
           {/* SearchResults and Playlist will go here later */}
        </div>
      </div>
    </div>
  );

  );
}

export default App;
