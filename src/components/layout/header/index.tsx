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
import { useNavigate } from "react-router-dom";
import { setToken } from "../../../services/authSlice";
import Skeleton from "react-loading-skeleton";

const menuItems = ["Home", "Shop", "Our Story", "Blog", "Contact Us"];

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showMenu, setShowMenu] = React.useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setToken(""));
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li className="menu-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="actions ">
        <RiSearchLine className="icon hidden md:block" size={24} />
        <RiHeart3Line className="icon hidden md:block" size={24} />
        <RiShoppingBag3Line className="hidden md:block" size={24} />
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
                    <li>
                      <RiUserSmileLine size={20} /> Profile
                    </li>
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
        ) : (
          <Skeleton
            baseColor="#d4d4d4"
            highlightColor="#dfdfdf"
            count={1}
            width={32}
            height={32}
            circle={true}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
