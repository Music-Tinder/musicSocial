import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1> BANDIFY </h1>
      <div className="header__nav">
        <p>
          <Link to="/">HOME</Link>
        </p>
        <p>
          <Link to="/all">ALL</Link>
        </p>
        <p>
          <Link to="/guitar">GUITAR</Link>
        </p>
        <p>
          <Link to="/drums">DRUMS</Link>
        </p>
        <p>
          <Link to="/vocals">VOCALS</Link>
        </p>
        <p>
          <Link to="/other">OTHER</Link>
        </p>
      </div>
    </header>
  );
}

export default Header;
