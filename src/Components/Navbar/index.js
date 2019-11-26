import React, { useState} from "react";
import "./static/css/navbar.css";
import logo from "./static/images/agric.png";
import { FaSearch} from "react-icons/fa";
import {IoIosArrowRoundForward} from 'react-icons/io'

import {BrowserRouter as Router, Link } from "react-router-dom";
import Search from './static/js/styled'
function Navbar() {
  const links = ["Home", "Hire", "Contact"];
  const [search, setSearch] = useState({
    display: "none",
    opacity: "0"
  });
  let toggleSearch = () => {
    search.display === "none"
      ? setSearch(previous => ({ ...previous, display: "flex", opacity: 1 }))
      : setSearch(previous => ({ ...previous, display: "none", opacity: 0 }));
  };
  return (
    <>
      <div data-testid="navbarId" className="navbar-me d-flex justify-content-between shadow">
        <img src={logo} className="pl-2 img-fluid logo" alt="" />
        <div className="login">
          <div className="d-flex align-items-center side-top">
            <div className="big-navbar" key="navbar">
              <Navigation key={links} links={links} />
            </div>
            <FaSearch onClick={toggleSearch} style={{ cursor: "pointer" }} />
            <button className="login-button">LOGIN</button>
          </div>
        </div>
      </div>
      <Search display={search} className=" d-flex justify-content-between">
        <input
          type="text"
          className="search-input"
          placeholder="Enter Your Search here"
        />
        <IoIosArrowRoundForward size={"2em"} style={{ color: "#428da5" }} />
      </Search>
      <div className="d-flex justify-content-around mobile-navbar">
        <Navigation links={links} />
      </div>
    </>
  );
}
function Navigation({ links }) {
  let navlinks = links.map((element,key) => (
    <Router key={key}>
        <Link  to={`/${element}`} className="pl-md-2 pr-md-3 nav-li">
        {element}
      </Link>
    </Router>
  ));
  return <>{navlinks}</>;
}
export default Navbar;
