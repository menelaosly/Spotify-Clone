import React from "react";
import {
  FavoriteBorderOutlined,
  Favorite,
  PlayCircleOutlineOutlined,
  PauseCircleOutlineOutlined,
  MoreHoriz,
} from "@material-ui/icons";
import image from "../../assets/album.jpg";
import "./ItemCard.scss";
export default function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={image} className="item-card--image" />
      <h5>{item.title}</h5>
      <p>{item.description}</p>
      <p className="item-card--followers">{item.followers} FOLLOWERS</p>

      <div className="item-card--overlay">
        {item.liked ? <Favorite color="green" /> : <FavoriteBorderOutlined />}
        {item.playing ? (
          <PauseCircleOutlineOutlined color="white" />
        ) : (
          <PlayCircleOutlineOutlined color="white" />
        )}
        <MoreHoriz color="white" />
      </div>
    </div>
  );
}
