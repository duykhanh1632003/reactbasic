import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'

const Nav = () => {
  return (
    <div className="topnav">
      <Link to="/home" className="active">Home</Link>
      <Link to="/todo" className="active">Todos</Link>
      <Link to="/contact" className="active">Contact</Link>
      <Link to="/about" className="active">About</Link>
      <Link to="/user" className="active">User</Link>
    </div>
  );
}

export default Nav;
