import React from "react";
import GroupedView from "./GroupedView";
export default function Home() {
  const title = "Home";
  let groups = [
    {
      title: "Shortcuts",
      pages: [
        [
          {
            title: "ελληνικα 2020",
            followers: "2,321",
            description: "",
          },
        ],
        [
          {
            title: "ελληνικα 2021",
            followers: "3,321",
            description: "",
          },
        ],
      ],
    },
    {
      title: "Shortcuts",
      pages: [
        [
          {
            title: "ελληνικα 2020",
            followers: "2,321",
            description: "",
          },
        ],
        [
          {
            title: "ελληνικα 2021",
            followers: "3,321",
            description: "",
          },
        ],
      ],
    },
  ];
  return (
    <>
      <GroupedView title={title} groups={groups}></GroupedView>
    </>
  );
}
