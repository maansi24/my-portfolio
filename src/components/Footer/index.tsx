import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full py-6 text-center">
      © {date.getFullYear()}. Developed by{" "}
      <a
        href="https://www.linkedin.com/in/manav-kaushal/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#c57653] hover:text-[#F5296E] transition duration-300 ease-in-out"
      >
        Manav Kaushal
      </a>
      .
    </footer>
  );
};

export default Footer;
