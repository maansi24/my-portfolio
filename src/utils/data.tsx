import { AboutInterface } from "@interfaces/AboutInterface";
import { iconProps } from "@interfaces/IconProps";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const profile = {
  name: "Maansi Aggarwal",
  age: 25,
  email: "maansi_2121ch12@iitp.ac.in",
  phone: "+91 97361 26334",
  address: "#206, Block 4, Department of Chemistry, IIT Patna.",
  country: "India",
  website: "https://maansi-aggarwal.vercel.app/",
  languages: ["English", "Hindi"],
  image:
    "https://images.pexels.com/photos/5477855/pexels-photo-5477855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  social: [
    {
      id: 1,
      title: "facebook",
      link: "https://www.facebook.com/mansi.singla.391",
      icon: <FaFacebookF {...iconProps} style={{ color: "#4267B2" }} />,
    },
    {
      id: 3,
      title: "linkedIn",
      link: "https://www.linkedin.com/in/maansi-aggarwal-03a1271b8/",
      icon: <FaLinkedinIn {...iconProps} style={{ color: "#0072b1" }} />,
    },
    {
      id: 4,
      title: "instagram",
      link: "https://www.instagram.com/maansingla/",
      icon: <FaInstagram {...iconProps} style={{ color: "#bc2a8d" }} />,
    },
  ],
};

export const menuItems = [
  { id: 1, title: "Home", triggerBy: "home" },
  // { id: 2, title: "Research", triggerBy: "research" },
  { id: 3, title: "Academics", triggerBy: "academics" },
  { id: 4, title: "Skills", triggerBy: "skills" },
  { id: 4, title: "Publications", triggerBy: "publications" },
  { id: 5, title: "Experience", triggerBy: "experience" },
  { id: 5, title: "Contact", triggerBy: "contact" },
];

export const AboutData: AboutInterface[] = [
  { key: "Age", value: profile.age },
  {
    key: "Phone",
    value: profile.phone,
    link: true,
    linkTo: `tel: ${profile.phone}`,
  },
  { key: "Residence", value: profile.country },
  {
    key: "Email",
    value: profile.email,
    link: true,
    linkTo: `mailTo: ${profile.email}`,
  },
  // { key: "Address", value: profile.address },
  // {
  //   key: "Website",
  //   value: profile.website,
  //   link: true,
  //   linkTo: profile.website,
  // },
];
