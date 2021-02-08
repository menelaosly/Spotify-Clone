import React from "react";
import { useState } from "react";
import Icon from "@material-ui/core/Icon";
import "./PagedGroup.scss";
import ItemCard from "../ItemCard/ItemCard";
export default function PagedGroup({ group }) {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(group.pages.length > page + 1 ? page + 1 : page);
  };

  const prevPage = () => {
    setPage(page ? page - 1 : page);
  };

  const getContent = () => {
    return (
      <div className="paged-group">
        <div className="title">
          <h3>{group.title}</h3>
          <div className="buttons">
            <Icon onClick={prevPage}>chevron_left</Icon>
            <Icon onClick={nextPage}>chevron_right</Icon>
          </div>
        </div>
        <div className="list">
          {group.pages[page].map((item) => (
            <ItemCard key={item.title} item={item}></ItemCard>
          ))}
        </div>
      </div>
    );
  };

  return getContent();
}
