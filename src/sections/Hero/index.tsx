import Badge from "@components/Badge";
import { useStateContext } from "@contexts/ContextProvider";
import { AboutInterface } from "@interfaces/AboutInterface";
import { AboutData, profile } from "@utils/data";
import React from "react";

const Hero = () => {
  const { isMobile } = useStateContext();
  return (
    <section
      id="home"
      className="relative flex items-center justify-center py-20 border-b min-h-fit border-b-gray-300 lg:min-h-screen lg:py-0"
    >
      <div className="w-full max-w-xl px-4 sm:px-0">
        <div className="relative">
          <Badge text="PMRF Fellow, 2022" />
          <h1 className="mb-6 text-5xl font-bold md:mb-4">{profile.name}</h1>
          {/* <p className="absolute text-sm font-bold -bottom-3 md:-bottom-1">
            (PMRF Fellow, 2022)
          </p> */}
        </div>
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
            Prof. Prolay Das
          </a>{" "}
          on application of Carbon dot conjugation with biomolecules.
        </p>
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-x-8 gap-y-2">
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
        <ul className="flex items-center mt-8 space-x-4">
          {profile.social.map((social) => (
            <li
              key={social.id}
              className="p-2 border-2 rounded-full opacity-75 cursor-pointer icon transition__300 hover:opacity-100"
              style={{
                backgroundColor: social.color,
                borderColor: social.color,
              }}
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute hidden -rotate-90 select-none -right-40 -z-1 lg:block"
        style={{ zIndex: -1 }}
      >
        <h4 className="font-extrabold uppercase text-9xl text-sideText">
          {profile.name.split(" ")[0]}
        </h4>
      </div>
    </section>
  );
};

export default Hero;
