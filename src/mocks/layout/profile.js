import {
    RiUser5Line,
    RiHeart3Line,
    RiBox1Line,
    RiMapPinLine,
    RiBankCardLine,
    RiNotification2Line,
    RiSettings4Line,
  } from "react-icons/ri";

const menuItems = [
    { icon: RiUser5Line, label: "Personal Information", path: "/profile" },
    { icon: RiHeart3Line, label: "My Favorites", path: "/favorites" },
    { icon: RiBox1Line, label: "My Orders", path: "/orders" },
    { icon: RiMapPinLine, label: "Manage Address", path: "/manage-address" },
    { icon: RiBankCardLine, label: "Payment Methods", path: "/payment-methods" },
    { icon: RiNotification2Line, label: "Notifications", path: "/notifications" },
    { icon: RiSettings4Line, label: "Settings", path: "/settings" },
  ];

  export default menuItems;
  