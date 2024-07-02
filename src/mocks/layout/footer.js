import {
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

const contactDetails = [
  { icon: <RiPhoneLine size={24} />, text: "+90 (555) 555 55 55" },
  { icon: <RiMailLine size={24} />, text: "mail@example.com" },
  { icon: <RiMapPinLine size={24} />, text: "Kayapınar, Diyarbakır" },
];

const informationLinks = [
  "My Account",
  "Login",
  "My Cart",
  "My Wishlist",
  "Checkout",
];

const serviceLinks = [
  "About Us",
  "Careers",
  "Delivery Information",
  "Privacy Policy",
  "Terms & Conditions",
];

const socialMediaIcons = [
  <RiFacebookFill size={20} />,
  <RiTwitterFill size={20} />,
  <RiInstagramFill size={20} />,
];

export { contactDetails, informationLinks, serviceLinks, socialMediaIcons };
