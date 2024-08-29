import React from "react";
import "../header/header.css";
import Logo from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Compare from "../../assets/icon-compare.svg";
import Wish from "../../assets/icon-heart.svg";
import Cart from "../../assets/icon-cart.svg";
import Account from "../../assets/icon-user.svg";
import Nav from "../header/nav/nav";

function Header() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <div className="selectDrop cursor">All Categories</div>
                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>

            <div className="col-sm-5 d-flex align-items-center">
              <select className="location">
                <option>Your location</option>
                <option>India</option>
                <option>USA</option>
                <option>Russia</option>
              </select>

              <ul className="list list-inline mb-0 headerTabs">
                <li className="list-inline-item">
                  <span>
                    <img src={Compare} />
                    Compare
                  </span>
                </li>
              </ul>
              <ul className="list list-inline mb-0 headerTabs">
                <li className="list-inline-item">
                  <span>
                    <img src={Wish} />
                    Wishlist
                  </span>
                </li>
              </ul>
              <ul className="list list-inline mb-0 headerTabs">
                <li className="list-inline-item">
                  <span>
                    <img src={Cart} />
                    Cart
                  </span>
                </li>
              </ul>
              <ul className="list list-inline mb-0 headerTabs">
                <li className="list-inline-item">
                  <span>
                    <img src={Account} />
                    Account
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
}

export default Header;
