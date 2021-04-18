import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward, faHeart } from '@fortawesome/free-solid-svg-icons'
import './PlayerControls.css'
//TODO: Favorite button settings needs the favorites backend
function PlayerControls(props) {
    const [like, setlike] = useState(false);

    // POST method has been blocked due to CORS
    const handleClick = () => {
        setlike(!like);
        fetch('https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zO', {
            method: 'POST',
            body: JSON.stringify(props.song?.id),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    let btn_class = like ? "unlikedButton" : "likedButton";
    console.log(btn_class);
    return (
        <div>
            <div className="c-player--controls">
                <button className={btn_class}>
                    <FontAwesomeIcon icon={faHeart} onClick={handleClick} />
                </button>
            </div>
            <div className="c-player--controls">
                <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                    <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
                </button>
                <button className="skip-btn" onClick={() => props.SkipSong()}>
                    <FontAwesomeIcon icon={faForward} />
                </button>  
        </div>
        </div>
        
    )
}

export default PlayerControls
