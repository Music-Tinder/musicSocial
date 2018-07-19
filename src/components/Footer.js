import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <footer className="footer">
      <p>
        <Link to="/profile">SIGN IN</Link>
      </p>
      <p>
        <Link to="/create">CREATE POST</Link>
      </p>
      <p>
        <Link to="/inbox">INBOX</Link>
      </p>
    </footer>
  );
}

export default Header;
