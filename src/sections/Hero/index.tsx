import { useStateContext } from "@contexts/ContextProvider";
import { AboutInterface } from "@interfaces/AboutInterface";
import { AboutData, profile } from "@utils/data";
import React from "react";

const Hero = () => {
  const { isMobile } = useStateContext();
  return (
    <section
      id="home"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:min-h-screen lg:py-0"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <h1 className="text-5xl font-bold">{profile.name}</h1>
        <p className="text-sm text-primary">
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
          on application of Carbon dot conjugation with DNA and other
          biomolecules.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {AboutData.map((about: AboutInterface) => (
            <p key={about.key}>
              <span className="font-bold">{about.key}:</span>&nbsp;
              {about.link ? (
                <a
                  href={about.linkTo}
                  target={!isMobile ? "_blank" : ""}
                  className="text-textPrimary hover:text-[#c57653]"
                  rel="noreferrer"
                >
                  {about.value}
                </a>
              ) : (
                <span className="text-textPrimary">{about.value}</span>
              )}
            </p>
          ))}
          <p className="col-span-1 sm:col-span-2">
            <span className="font-bold">Languages:</span>&nbsp;
            <span className="text-textPrimary">
              {profile.languages.join(", ")}
            </span>
          </p>
          <p className="col-span-1 sm:col-span-2">
            <span className="font-bold">Address:</span>&nbsp;
            <span className="text-textPrimary">{profile.address}</span>
          </p>
        </div>
        <ul className="mt-8 flex items-center space-x-6">
          {profile.social.map((social) => (
            <li key={social.id} className="icon hover:-mt-2">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
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
        <h4 className="text-9xl font-extrabold text-sideText uppercase">
          {profile.name.split(" ")[0]}
        </h4>
      </div>
    </section>
  );
};

export default Hero;
