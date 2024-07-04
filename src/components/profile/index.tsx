import React from "react";
import { useAppSelector } from "../../services";
import { Link, useLocation } from "react-router-dom";
import menuItems from "../../mocks/layout/profile";

const ProfileLayout = ({ children }: any) => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-4">
      <div className="lg:w-1/4 w-full sticky top-0 border border-solid border-gray-200 rounded-sm">
        <div className="flex items-center py-4 px-6 gap-4 border-b border-gray-200 border-solid">
          <img
            src={user?.avatar}
            alt="profile"
            className="rounded-full w-14 h-14"
          />
          <div className="flex flex-col items-start">
            <p>Hello 👋</p>
            <h3 className="text-xl font-bold text-center">{user?.name}</h3>
          </div>
        </div>
        <ul className="mt-6">
          {menuItems.map((item: any) => (
            <Link to={item.path}>
            <li
              key={item.label}
              className={`flex text-lg items-center gap-4 py-4 px-6 hover:bg-primary hover:text-white transition-all cursor-pointer ${
                location.pathname === item.path ? "bg-black text-white" : ""
              }`}
            >
              <item.icon size={26} />
              <span>{item.label}</span>
            </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="lg:w-3/4 w-full">{children}</div>
    </div>
  );
};

export default ProfileLayout;
