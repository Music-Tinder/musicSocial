import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <footer className="footer">
      <p>
        <Link to="/profile">PROFILE</Link>
      </p>
      <p>
        <Link to="/create">CREATE POST</Link>
      </p>
    </footer>
  );
}

export default Header;
