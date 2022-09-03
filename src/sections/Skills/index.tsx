import Card from "@components/Cards";
import SectionTitle from "@components/SectionTitle";
import React from "react";

const skillsData = [
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <SectionTitle
          name="What I Do"
          title="Here Are My Instrumental Skills"
          description="During My Ph.D. I have learned and got hands on experience with the instruments like"
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
