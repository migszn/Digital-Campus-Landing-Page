import { MdMobileFriendly } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";
import { MdPermDeviceInformation } from "react-icons/md";


import school1 from "./assets/school1.webp";
import school2 from "./assets/school2.webp";
import school3 from "./assets/school3.webp";
import school4 from "./assets/school4.webp";
import school5 from "./assets/school5.webp";
import school6 from "./assets/school6.webp";
import school7 from "./assets/school7.webp";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.webp";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Features",
  },
  {
    id: 4,
    href: "teacher",
    link: "Testimonials",
  },
  {
    id: 5,
    href: "contact",
    link: "Book A Demo",
  },
];

export const categories = [
  {
    id: 1,
    icon: <MdMobileFriendly />,
    category: "Mobile Responsive",
  },
  {
    id: 2,
    icon: <TbSocial />,
    category: "Social Network",
  },
  {
    id: 3,
    icon: <FaUniversity />,
    category: "Campus Services",
  },
  {
    id: 4,
    icon: <MdPermDeviceInformation />,
    category: "School Information",
  },
];

export const courses = [
  {
    id: 1,
    image: school1,
  },
  {
    id: 2,
    image: school2,
  },
  {
    id: 3,
    image: school3,
  },
  {
    id: 4,
    image: school4,
  },
  {
    id: 5,
    image: school5,
  },
  {
    id: 6,
    image: school6,
  },
  {
    id: 7,
    image: school7,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is Skillex?",
  },
  {
    id: 2,
    title: "What can I learn from Skillex?",
  },
  {
    id: 3,
    title: "Can I teach on Skillex?",
  },
  {
    id: 4,
    title: "What is included in my Skillex membership?",
  },
];
