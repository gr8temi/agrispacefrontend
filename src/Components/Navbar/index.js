import React, { useState, useEffect } from "react";
import "./static/css/navbar.css";
import logo from "./static/images/agric.png";
import { FaSearch} from "react-icons/fa";
import {IoIosArrowRoundForward} from 'react-icons/io'
import styled from "styled-components";
import {BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";

let Search = styled.div`
  background-color: #f8f4f1;
  border-bottom: 1px solid #d1cecc;
  padding: 0.5rem;
  display: ${props => props.display.display} !important;
  opacity: ${props => props.display.opacity} !important;
  transition: ease-in-out 3s;
`;

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
            <div className="big-navbar">
              <Navigation links={links} />
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
  let navlinks = links.map(element => (
    <>
    <Router>
        <Link to={`/${element}`} className="pl-md-2 pr-md-3 nav-li">
        {element}
      </Link>
    </Router>
      
    </>
  ));
  return <>{navlinks}</>;
}
export default Navbar;
