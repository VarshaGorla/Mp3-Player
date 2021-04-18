import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState([]);
  
  const  getSongs = () => {
    fetch('https://api-stg.jam-community.com/song/trending')
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        console.log(jsonData)
        setSongs(() => jsonData);
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      });
  }
  console.log(songs[0]?.name);  

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    getSongs();
  }, [])


    return (
      <div className="App">
        <Player 
        song={songs[currentSongIndex]} 
        nextSong={songs[nextSongIndex]}
      />
      </div>
    );
  
}

export default App;
