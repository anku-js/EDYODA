import EDYODA from "../Icons/EDYODA";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <img src="EDYODA.png" className="edyoda-logo" />
          <div className="navigation-links">
            <ul className="navigation-links-left">
              <li>
                <p>Courses</p>
                <MdKeyboardArrowDown className="down-arrow" />
              </li>
              <li>
                <p>Programs</p>
                <MdKeyboardArrowDown className="down-arrow" />
              </li>
            </ul>
            <ul className="navigation-links-right">
              <li>
                <AiOutlineSearch className="search-logo" />
              </li>
              <li>Log in</li>
              <li>
                <button className="join-button">JOIN NOW</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
