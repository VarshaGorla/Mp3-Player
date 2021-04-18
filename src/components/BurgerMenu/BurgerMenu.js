import React from 'react'
import { fallDown as Menu } from "react-burger-menu";
import './BurgerMenu.css'

//TODO: My idea was to also fetch the favorites here
function BurgerMenu(props) {
    const handleClick = () => {
        props.setListVisibility(!props.isPlaylistVisible)
    }
    return (
            <Menu {...props}>
                <div onClick={handleClick} className="menu-item">
                    Playlist
                </div>
                <div className="menu-item">
                    Favorites
                </div>
            </Menu>
    )
}

export default BurgerMenu
