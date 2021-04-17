import React from 'react'

function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={props.song.cover_image_path} alt="" />
            </div>
            <h3 className="details-title">{props.song.name}</h3>
            <h4 className="details-artist">{props.song.artist_name}</h4>
        </div>
    )
}

export default PlayerDetails
