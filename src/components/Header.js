import React from "react";
import { Link } from 'react-router-dom'

function Header(){

    return (
        <header>
          <h1> MUSIC </h1>
        
          <ul >
          <li >
              <Link to="/all">ALL</Link>
            </li>
            <li >
              <Link to="/guitar">GUITAR</Link>
            </li>
            <li >
              <Link to="/drums">DRUMS</Link>
            </li>
            <li >
              <Link to="/vocals">VOCALS</Link>
            </li>
            <li >
              <Link to="/other">OTHER</Link>
            </li>
            <li >
              <Link to="/create">CREATE POST</Link>
            </li>
            <li >
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        
      </header>
    );
  

}


export default Header;