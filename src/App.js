import {useState, useEffect} from 'react';

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

  useEffect(() => {
    getSongs();
  }, [])

    

    return (
      <div className="App">
        App
      </div>
    );
  
}

export default App;
