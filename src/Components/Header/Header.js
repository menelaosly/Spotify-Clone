import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Icon from "@material-ui/core/Icon";
import avatar from "../../assets/avatar.jpg";
export default function Header() {
  const historyBack = () => {};
  const historyFront = () => {};
  return (
    <div className="header" id="header">
      <Link onClick={historyBack}>
        <Icon>chevron_left</Icon>{" "}
      </Link>
      <Link onClick={historyFront}>
        <Icon>chevron_right</Icon>
      </Link>
      <input placeholder="Search"></input>
      <div className="avatar">
        <img src={avatar}></img>
      </div>
      { "Menelaos Lydakis" }
    </div>
  );
}
