import React from "react";
import PagedGroup from "../Components/PagedGroup/PagedGroup";

export default function GroupedView({ title, groups }) {
  return (
    <>
      <div className="heading">
        <h1>{title}</h1>
      </div>
      {groups.map((group) => (
        <PagedGroup key={group.title} group={group}></PagedGroup>
      ))}
    </>
  );
}
