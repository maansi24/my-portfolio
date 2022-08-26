import { profile } from "@utils/data";
import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="max-w-xl">
        <h1 className="text-7xl font-bold">Maansi Singla</h1>
        <p className="text-sm">
          Hello I am a UI/UX Designer from San Francisco. I have rich experience
          of 5+ years in web site design and app design, also I am good at
          extraordinary design concept. I love to hear from you about your
          unique needs.
        </p>
        <ul className="mt-8 group flex items-center space-x-6">
          {profile.social.map((social) => (
            <li key={social.id} className="icon">
              <a href={social.title} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -rotate-90 -right-48">
        <h2 className="text-10xl font-extrabold text-gray-100">MAANSI</h2>
      </div>
    </div>
  );
};

export default Hero;
