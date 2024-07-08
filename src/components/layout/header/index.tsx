import React from "react";
import Button, { ButtonSize } from "../../shared/Button";
import {
  RiSearchLine,
  RiHeart3Line,
  RiShoppingBag3Line,
  RiMenuLine,
  RiLogoutCircleLine,
  RiUserSmileLine,
} from "react-icons/ri";

import "./Header.css";
import { useAppDispatch, useAppSelector } from "../../../services";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../services/authSlice";
import { menuItems } from "../../../constants/menuItems";
import SearchModal from "./components/search";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showMenu, setShowMenu] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);

  const cardItems = useAppSelector((state) => state.cart.items);

  const totalItems = cardItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  
  return (
    <header className="header">
      <Link to="/" className="logo">
        Logo
      </Link>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li className="menu-item" key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="actions ">
        <RiSearchLine
          className="icon hidden md:block"
          size={24}
          onClick={() => setShowSearch(true)}
        />
        <SearchModal show={showSearch} onClose={() => setShowSearch(false)} />
        {user && Object.keys(user).length !== 0 ? (
          <>
            <Link to="/favorites">
              <RiHeart3Line className="icon hidden md:block" size={24} />
            </Link>
            <Link to="/cart" className="relative">
              <RiShoppingBag3Line className="hidden md:block" size={24} />
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </Link>
          </>
        ) : null}
        <RiMenuLine className="icon md:hidden block" size={24} />
        {!loading ? (
          user && Object.keys(user).length !== 0 ? (
            <div className="avatar">
              <img
                src={user.avatar}
                alt="avatar"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              />
              {showMenu && (
                <div
                  onMouseEnter={() => setShowMenu(true)}
                  onMouseLeave={() => setShowMenu(false)}
                  className="dropdown"
                >
                  <ul>
                    <Link to="/profile">
                      <li>
                        <RiUserSmileLine size={20} /> Profile
                      </li>
                    </Link>
                    <li onClick={handleLogout}>
                      <RiLogoutCircleLine size={20} /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Button size={ButtonSize.SMALL} link="/login">
              Login
            </Button>
          )
        ) : null}
      </div>
    </header>
  );
};

export default Header;
