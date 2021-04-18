import React from 'react';
import './Playlist.css'

function Playlist(props) {
    return (
        <div className="c-player--playlist">
            {props.songs?.map(song =>
            <ul onClick={() => {props.setListVisibility(false);
                                props.setCurrentSongIndex(props.songs?.indexOf(song))}
                        }>
                <img src={song.cover_image_path} alt="" />
                <div>{song.name}</div>
            </ul>
            )}
        </div>
    )
}

export default Playlist
