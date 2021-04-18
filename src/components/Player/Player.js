import React, {useState, useRef, useEffect} from 'react'
import Sidebar from '../BurgerMenu/BurgerMenu';
import PlayerControls from '../PlayerControls/PlayerControls';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './Player.css'

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
        <div className="c-player" id="outer-container">
            <Sidebar isPlaylistVisible={props.isPlaylistVisible} setListVisibility={props.setListVisibility} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <audio src={props.songs[props.currentSongIndex]?.music_file_path} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls song={props.songs[props.currentSongIndex]} isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
            <p>
                <marquee>Next up: <span>{props.songs[props.nextSongIndex]?.name} by {props.songs[props.nextSongIndex]?.artist_name}</span></marquee>
            </p>
        </div>
    )
}

export default Player
