import React from "react";
import MOVIE_DATA from "./movies.data";
import CardsMovies from "../../components/cardsMovies/cardsMovies.componentes";
import "./movies.style.css";

const collections = MOVIE_DATA;

const Movies = () => {
  return (
    <div className="contanerMovies">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CardsMovies key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Movies;
