import Icon from "@material-ui/core/Icon";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideNav.scss";
export default function SideNav() {
  let browseBtns = [
    {
      value: "/home",
      text: "Home",
      icon: "home",
    },
    {
      value: "/browse",
      text: "Browse",
      icon: "folder",
    },
    {
      value: "/radio",
      text: "Radio",
      icon: "radio",
    },
  ];

  return (
    <div className="side-nav">
      {browseBtns.map((btn) => {
        return (
          <NavLink
            to={btn.value}
            activeClassName="active"
            key={btn.value}
            className="nav-item"
          >
            <Icon>{btn.icon}</Icon>
            {btn.text}
          </NavLink>
        );
      })}
      <div className="scroll">
        <div className="scroll-content">
          <h6>YOUR LIBRARY</h6>
          <NavLink
            to="/made-for-u"
            className="list-item"
            activeClassName="active"
          >
            Made For You
          </NavLink>
          <NavLink to="/recent" className="list-item" activeClassName="active">
            Recently Played
          </NavLink>
          <NavLink to="/liked" className="list-item" activeClassName="active">
            Liked Songs
          </NavLink>
          <NavLink to="/albums" className="list-item" activeClassName="active">
            Albums
          </NavLink>
          <NavLink to="/artists" className="list-item" activeClassName="active">
            Artists
          </NavLink>
          <NavLink
            to="/podcasts"
            className="list-item"
            activeClassName="active"
          >
            Podcasts
          </NavLink>

          <h6>PLAYLIST</h6>
          <NavLink
            to="/playlist/jazz"
            className="list-item"
            activeClassName="active"
          >
            Jazz
          </NavLink>
          <NavLink
            to="/playlist/jazz"
            className="list-item"
            activeClassName="active"
          >
            Jazz
          </NavLink>
          <NavLink
            to="/playlist/jazz"
            className="list-item"
            activeClassName="active"
          >
            Jazz
          </NavLink>
          <NavLink
            to="/playlist/jazz"
            className="list-item"
            activeClassName="active"
          >
            Jazz
          </NavLink>
        </div>
      </div>

      <div className="nav-item bottom">
        <Icon>add_circle_outline</Icon>
        New Playlist
      </div>
    </div>
  );
}
