import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div>
      <NavLink to="/Home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/About">
        <button>About</button>
      </NavLink>
      <NavLink to="/Favorites">
        <button>Favorites</button>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
