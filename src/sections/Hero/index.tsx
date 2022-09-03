import { profile } from "@utils/data";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:min-h-screen lg:py-0"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <h1 className="text-5xl font-bold">{profile.name}</h1>
        <p className="text-sm">
          Hi! I am Maansi presently pursuing my Ph.D. at Department of
          Chemistry, Indian Institute of Technology Patna (IIT Patna).
          <br />
          Currently, working under the Supervision of{" "}
          <a
            href="https://scholar.google.co.in/citations?user=W3JkCN8AAAAJ&hl=en"
            target={"_blank"}
            className="text-[#c57653]"
            rel="noreferrer"
          >
            Prof. Prolay das
          </a>{" "}
          on some application of Carbon dot conjugation with DNA or other
          biomolecules.
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
      <div
        className="absolute -rotate-90 -right-40 select-none -z-1 hidden lg:block"
        style={{ zIndex: -1 }}
      >
        <h4 className="text-9xl font-extrabold text-gray-100 uppercase">
          {profile.name.split(" ")[0]}
        </h4>
      </div>
    </section>
  );
};

export default Hero;
