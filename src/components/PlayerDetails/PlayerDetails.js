import React from 'react';
import './PlayerDetails.css'

function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={props.song?.cover_image_path} alt="" />
            </div>
            <p className="details-title"> {props.song?.name}  </p>         
            <h4 className="details-artist">{props.song?.artist_name}</h4>
        </div>
    )
}

export default PlayerDetails
