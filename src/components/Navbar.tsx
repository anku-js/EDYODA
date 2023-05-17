
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function handleClick() {
    setHamburgerActive((hamburgerActive) => !hamburgerActive);
  }

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <img src="EDYODA.png" className="edyoda-logo" alt="Edyoda logo"/>
          <div
            className={`navigation-links ${hamburgerActive ? "active" : ""}`}
          >
            <ul className="navigation-links-left">
              <li onClick={handleClick}>
                <p>Courses</p>
                <MdKeyboardArrowDown className="down-arrow" />
              </li>
              <li onClick={handleClick}>
                <p>Programs</p>
                <MdKeyboardArrowDown className="down-arrow" />
              </li>
            </ul>
            <ul className="navigation-links-right">
              <li onClick={handleClick}>
                <AiOutlineSearch className="search-logo" />
              </li>
              <li onClick={handleClick}>Log in</li>
              <li onClick={handleClick}>
                <button className="join-button">JOIN NOW</button>
              </li>
            </ul>
          </div>
          <div
              className={`hamburger ${hamburgerActive ? "active" : ""}`}
              onClick={handleClick}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
        </nav>
      </header>
    </div>
  );
}
