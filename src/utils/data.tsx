import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { iconSize } from "./config";

const iconProps = {
  size: iconSize,
  className: "cursor-pointer",
};

export const profile = {
  name: "Maansi Aggarwal",
  age: 25,
  email: "maansi_2121ch12@iitp.ac.in",
  phone: "+91 97361 26334",
  address: "#206, Department of Chemistry, IIT Patna.",
  country: "India",
  website: "https://maansi-aggarwal.vercel.app/",
  languages: ["English", "Hindi"],
  image:
    "https://images.pexels.com/photos/5477855/pexels-photo-5477855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  social: [
    {
      id: 1,
      title: "facebook",
      link: "",
      icon: <FaFacebookF {...iconProps} style={{ color: "#4267B2" }} />,
    },
    {
      id: 2,
      title: "twitter",
      link: "",
      icon: <FaTwitter {...iconProps} style={{ color: "#1DA1F2" }} />,
    },
    {
      id: 3,
      title: "linkedIn",
      link: "",
      icon: <FaLinkedinIn {...iconProps} style={{ color: "#0072b1" }} />,
    },
    {
      id: 4,
      title: "instagram",
      link: "",
      icon: <FaInstagram {...iconProps} style={{ color: "#bc2a8d" }} />,
    },
  ],
};
