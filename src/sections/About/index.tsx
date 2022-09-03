import React from "react";
import { useStateContext } from "@contexts/ContextProvider";
import SectionTitle from "@components/SectionTitle";
import { AboutData, profile } from "@utils/data";
import { AboutInterface } from "@interfaces/AboutInterface";

const About = () => {
  const { isMobile } = useStateContext();

  return (
    <section
      id="about"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <SectionTitle
          name="About Me"
          title="I Am A Product Designer, Specialized In UI/UX Design &amp; Digital Design"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {AboutData.map((about: AboutInterface) => (
            <p key={about.key}>
              <span className="font-bold">{about.key}:</span>&nbsp;
              {about.link ? (
                <a
                  href={about.linkTo}
                  target={!isMobile ? "_blank" : ""}
                  className="text-gray-500 hover:text-[#c57653]"
                  rel="noreferrer"
                >
                  {about.value}
                </a>
              ) : (
                <span className="text-gray-500">{about.value}</span>
              )}
            </p>
          ))}
          <p className="col-span-1 sm:col-span-2">
            <span className="font-bold">Languages:</span>&nbsp;
            <span className="text-gray-500">
              {profile.languages.join(", ")}
            </span>
          </p>
          <p className="col-span-1 sm:col-span-2">
            <span className="font-bold">Address:</span>&nbsp;
            <span className="text-gray-500">{profile.address}</span>
          </p>
        </div>
      </div>
      <div
        className="absolute -rotate-90 -right-24 select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="text-8xl font-extrabold text-gray-100 uppercase inline-block">
          ABOUT
        </span>
      </div>
    </section>
  );
};

export default About;
