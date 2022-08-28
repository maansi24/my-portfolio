import Card from "@components/Cards";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import { BsGlobe } from "react-icons/bs";

const skillsData = [
  {
    id: 1,
    icon: <BsGlobe className="w-8 h-8 mx-auto" />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
    btnText: "Explore More",
    btnLink: "test",
  },
  {
    id: 1,
    icon: <BsGlobe className="w-8 h-8 mx-auto" />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
    btnText: "Explore More",
    btnLink: "test",
  },
  {
    id: 1,
    icon: <BsGlobe className="w-8 h-8 mx-auto" />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
    btnText: "Explore More",
    btnLink: "test",
  },
  {
    id: 1,
    icon: <BsGlobe className="w-8 h-8 mx-auto" />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
    btnText: "Explore More",
    btnLink: "test",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl px-4 sm:px-0">
        <SectionTitle
          name="What I Do"
          title="Here Are My All Skills"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsData?.map((skill) => (
            <Card
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              link={skill.btnLink}
              center
            />
          ))}
        </div>
      </div>
      <div className="absolute -rotate-90 -right-[100px] select-none hidden lg:inline-block">
        <h4 className="text-8xl font-extrabold text-gray-100 uppercase">
          Skills
        </h4>
      </div>
    </section>
  );
};

export default Skills;
