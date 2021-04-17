import React from 'react'
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {
    return (
        <div className="c-player">
            <audio></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.song} />
            <PlayerControls/>
            <p>Next up: <span>{props.nextSong.name} by {props.nextSong.artist_name}</span></p>
        </div>
    )
}

export default Player
