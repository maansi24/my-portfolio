import Button from "@components/Button";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import styled from "styled-components";

const experienceData = [
  {
    id: 1,
    row: {
      dates: "2014-2016",
      title: "Graphic Designer, Art Company, DC",
      desc: "Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.",
    },
  },
  {
    id: 2,
    row: {
      dates: "2014-2016",
      title: "Graphic Designer, Art Company, DC",
      desc: "Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.",
    },
  },
  {
    id: 3,
    row: {
      dates: "2014-2016",
      title: "Graphic Designer, Art Company, DC",
      desc: "Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.",
    },
  },
];

const ListStyled = styled.ul`
  padding: 0.5rem;

  & li.dates,
  li.title {
    color: ${({ theme }) => theme.colors.primary2};
  }

  & li.dates,
  li.desc {
    opacity: 0.7;
  }
`;

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl px-4 sm:px-0">
        <SectionTitle
          name="My Experience"
          title="I Have 6+ Years Of Experience With Many Awards"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
        <div className="mt-4">
          {experienceData.map((exp) => (
            <ListStyled key={exp.id}>
              <li
                className="dates font-bold text-xs"
                style={{ width: "120px" }}
              >
                {exp.row.dates}
              </li>
              <li className="title font-bold text-sm">{exp.row.title}</li>
              <li className="desc text-sm">{exp.row.desc}</li>
            </ListStyled>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            I have also done many freelance work alongside with the
            company&apos;s work which helps me to upgrade my skills and passion.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Button rounded={false}>See My Portfolio</Button>
        </div>
      </div>
      <div
        className="absolute -rotate-90 -right-[265px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="text-8xl font-extrabold text-gray-100 uppercase inline-block">
          EXPERIENCE
        </span>
      </div>
    </section>
  );
};

export default Experience;
