import {useState, useEffect} from 'react';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';

function App() {
  const [songs, setSongs] = useState([]);
  const [isPlaylistVisible, setListVisibility] = useState(false);
  
  const  getSongs = () => {
    fetch('https://api-stg.jam-community.com/song/trending')
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        setSongs(() => jsonData);
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      });
  }
  console.log(songs);  

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    getSongs();
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs?.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex])

  console.log(currentSongIndex);
  console.log(nextSongIndex);
    return (
      <div className="App"> {
        isPlaylistVisible ? 
          <Playlist setListVisibility={setListVisibility} setCurrentSongIndex={setCurrentSongIndex}  songs={songs}/> : 
          <Player 
            setListVisibility={setListVisibility}
            currentSongIndex={currentSongIndex} 
            setCurrentSongIndex={setCurrentSongIndex} 
            nextSongIndex={nextSongIndex} 
            songs={songs}
          />
      }
      </div>
    );
  
}

export default App;
