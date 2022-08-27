import React from "react";
import { useStateContext } from "@contexts/ContextProvider";
import SectionTitle from "@components/SectionTitle";
import { profile } from "@utils/data";

const AboutData = [
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
  { key: "Address", value: profile.address },
  {
    key: "Website",
    value: profile.website,
    link: true,
    linkTo: profile.website,
  },
];

const About = () => {
  const { isMobile } = useStateContext();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center border-b border-b-gray-300"
    >
      <div className="max-w-xl">
        <SectionTitle
          name="About Me"
          title="I Am A Product Designer, Specialized In UI/UX Design &amp; Digital Design"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-2">
          {AboutData.map((about) => (
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
        </div>
      </div>
      <div className="absolute -rotate-90 -right-20">
        <h4 className="text-8xl font-extrabold text-gray-100">ABOUT</h4>
      </div>
    </section>
  );
};

export default About;
