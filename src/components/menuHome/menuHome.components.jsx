import React from "react";
import CardsHome from "../cardsHome/cardsHome.components";
import "./menuHome.style.css";

const sections = [
  {
    title: "History",
    imageUrl: "https://i.ibb.co/hYk5tTZ/history.jpg",
    id: 1,
    linkUrl: "history",
  },
  {
    title: "Movies",
    imageUrl: "https://i.ibb.co/bbs9J1n/movies.jpg",
    id: 2,
    linkUrl: "movies",
  },
  {
    title: "Short Films",
    imageUrl: "https://i.ibb.co/sH1vMTK/shortfilm.jpg",
    id: 3,
    linkUrl: "shortfilms",
  },

  {
    title: "Video Games",
    imageUrl: "https://i.ibb.co/yX7d2qz/videogame.jpg",
    id: 4,
    linkUrl: "videogames",
  },
];
const MenuHome = () => (
  <div className="containerMenuHome">
    {sections.map(({ id, ...otherSectionProps }) => (
      <CardsHome key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default MenuHome;
