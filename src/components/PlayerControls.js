import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward, faHeart } from '@fortawesome/free-solid-svg-icons'

function PlayerControls(props) {
    return (
        <div>
            <div className="c-player--controls">
                <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
            <div className="c-player--controls">
                <button className="skip-btn">
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className="play-btn">
                    <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
                </button>
                <button className="skip-btn">
                    <FontAwesomeIcon icon={faForward} />
                </button>  
        </div>
        </div>
        
    )
}

export default PlayerControls
