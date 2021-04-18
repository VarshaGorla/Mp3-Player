import React, {useState, useRef, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let currentSong = props.currentSongIndex;
                currentSong++;

                if (currentSong > props.songs.length - 1) {
                    currentSong = 0;
                }

                return currentSong;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let currentSong = props.currentSongIndex;
                currentSong--;

                if (currentSong < 0) {
                    currentSong = props.songs.length - 1;
                }

                return currentSong;
            });
        }
    }
    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex]?.music_file_path} ref={audioEl}></audio>
            <button className="menu-btn">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
            <p>Next up: <span>{props.songs[props.nextSongIndex]?.song_info} by {props.songs[props.nextSongIndex]?.artist_name}</span></p>        </div>
    )
}

export default Player
