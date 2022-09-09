import { AboutInterface } from "@interfaces/AboutInterface";
import { AcademicsInterface } from "@interfaces/AcademicsInterface";
import { iconProps } from "@interfaces/IconProps";
import { SkillsInterface } from "@interfaces/SkillsInterface";
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
      id: 2,
      title: "linkedIn",
      link: "https://www.linkedin.com/in/maansi-aggarwal-03a1271b8/",
      icon: <FaLinkedinIn {...iconProps} style={{ color: "#0072b1" }} />,
    },
    {
      id: 3,
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
  { id: 5, title: "Publications", triggerBy: "publications" },
  { id: 6, title: "Experience", triggerBy: "experience" },
  { id: 7, title: "Contact", triggerBy: "contact" },
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
];

export const academicsData: AcademicsInterface[] = [
  {
    id: 1,
    row: {
      dates: "2021-Present",
      title: "Ph.D. in Chemistry",
      cgpa: 8.79,
      organization: "Indian Institute of Technology, Patna.",
    },
  },
  {
    id: 2,
    row: {
      dates: "2018-2020",
      title: "M.Sc. in Chemistry",
      cgpa: 9.74,
      organization: "Thapar Institute of Engineering and Technology, Patiala.",
    },
  },
  {
    id: 3,
    row: {
      dates: "2015-2018",
      title: "B.Sc. Non Medical",
      percentage: 83.25,
      organization:
        "M.C.M DAV College for Women, Punjab University, Chandigarh.",
    },
  },
  {
    id: 4,
    row: {
      dates: "2014-2015",
      title: "12th Class (CBSE)",
      percentage: 92,
      organization:
        "Holy Heart Senior Secondary School, Nahan, Himachal Pradesh.",
    },
  },
  {
    id: 5,
    row: {
      dates: "2012-2013",
      title: "10th Class (CBSE)",
      cgpa: 9.8,
      organization:
        "Holy Heart Senior Secondary School, Nahan, Himachal Pradesh.",
    },
  },
];

export const skillsData: SkillsInterface[] = [
  {
    id: 1,
    icon: null,
    title: "FTIR",
    description: "",
    btnText: "",
    btnLink: "",
  },
  {
    id: 2,
    icon: null,
    title: "HPLC",
    description: "",
    btnText: "",
    btnLink: "",
  },
  {
    id: 3,
    icon: null,
    title: "AFM",
    description: "",
    btnText: "",
    btnLink: "",
  },
  {
    id: 4,
    icon: null,
    title: "UV",
    description: "",
    btnText: "",
    btnLink: "",
  },
  {
    id: 5,
    icon: null,
    title: "Circular Dichroism",
    description: "",
    btnText: "",
    btnLink: "",
  },
  {
    id: 6,
    icon: null,
    title: "Photo Luminescence",
    description: "",
    btnText: "",
    btnLink: "",
  },
  {
    id: 7,
    icon: null,
    title: "Gel Electrophorsis",
    description: "",
    btnText: "",
    btnLink: "",
  },
];
