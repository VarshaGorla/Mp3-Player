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

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
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
  
    getSongs();
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex])
  console.log(songs[0]?.name);  


    return (
      <div className="App">
        <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
      </div>
    );
  
}

export default App;
