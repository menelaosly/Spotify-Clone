import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SideNav() {
    let browseBtns = [
        {
            value: "home",
            text: "Home",
            icon: "home",
            active: true
        },
        {
            value: "browse",
            text: "Browse",
            icon: "folder-open",
            active: false
        },
        {
            value: "radio",
            text: "Radio",
            icon: "comment",
            active: false
        },
    ]

    return (
        <div className="side-nav">
            { browseBtns.map(btn => {
                return <div key={btn.name} className={`nav-item ${btn.active ? "active" : ""}`}>
                    <FontAwesomeIcon color="white" icon={[btn.active ? "fas" : "far",btn.icon]} />
                    {btn.text}
                </div>
            })}

            <div className="scroll">
                <h6>YOUR LIBRARY</h6>
                <div className="list-item">Made For You</div>
                <div className="list-item">Recently Played</div>
                <div className="list-item">Liked Songs</div>
                <div className="list-item">Albums</div>
                <div className="list-item">Artists</div>
                <div className="list-item">Podcasts</div>

                <h6>PLAYLIST</h6>
                <div className="list-item">Jazz</div>
                <div className="list-item">Jazz</div>
                <div className="list-item">Jazz</div>
                <div className="list-item">Jazz</div>
            </div>

            <div className="nav-item bottom">
                <FontAwesomeIcon icon="plus"/>
                New Playlist
            </div>
        </div>
    )
}
