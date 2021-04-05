import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";
import miniLogo from "../../assets/img/home.png";
import logo from "../../assets/img/Studio_Ghibli.png";

const Header = () => (
  <div className="containerHeader">
    <Link to="/">
      <img src={miniLogo} alt="" />
    </Link>
    <img className="imgLogo" src={logo} alt="logo" />

    <div className="containerMenu">
      <Link className="option" to="/history">
        History
      </Link>
      <Link className="option" to="/movies">
        Movies
      </Link>
      <Link className="option" to="/shortfilms">
        Short Films
      </Link>
      <Link className="option" to="/videogames">
        Video Games
      </Link>
    </div>
  </div>
);

export default Header;
