import SectionTitle from "@components/SectionTitle";
import React from "react";
import styled from "styled-components";

const experienceData = [
  {
    id: 1,
    row: {
      dates: "2021-Present",
      title: "Ph.D. in Chemistry",
      cgpa: 8.79,
      organization: "Indian Institute of Technology, Patna.",
    },
  },
  {
    id: 2,
    row: {
      dates: "2018-2020",
      title: "M.Sc. in Chemistry",
      cgpa: 9.74,
      organization: "Thapar Institute of Engineering and Technology, Patiala.",
    },
  },
  {
    id: 3,
    row: {
      dates: "2015-2018",
      title: "B.Sc. Non Medical",
      percentage: 83.25,
      organization:
        "M.C.M DAV College for Women, Punjab University, Chandigarh.",
    },
  },
  {
    id: 4,
    row: {
      dates: "2014-2015",
      title: "12th Class (CBSE)",
      percentage: 92,
      organization:
        "Holy Heart Senior Secondary School, Nahan, Himachal Pradesh.",
    },
  },
  {
    id: 5,
    row: {
      dates: "2012-2013",
      title: "10th Class (CBSE)",
      cgpa: 9.8,
      organization:
        "Holy Heart Senior Secondary School, Nahan, Himachal Pradesh.",
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

const AcademicBackground = () => {
  return (
    <section
      id="academicBackground"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl px-4 sm:px-0">
        <SectionTitle name="Academic Background" />
        <div className="mt-4">
          {experienceData.map((exp) => (
            <ListStyled key={exp.id}>
              <li
                className="dates font-bold text-xs"
                style={{ width: "120px" }}
              >
                {exp.row.dates}
              </li>
              <li className="title font-bold text-sm">
                {exp.row.title} |{" "}
                {exp.row?.cgpa
                  ? `CGPA: ${exp.row.cgpa}/10`
                  : `Percentage: ${exp.row.percentage}%`}
              </li>
              <li className="desc text-sm">{exp.row.organization}</li>
            </ListStyled>
          ))}
        </div>
        {/* <div className="mt-4">
          <p className="text-sm text-gray-500">
            I have also done many freelance work alongside with the
            company&apos;s work which helps me to upgrade my skills and passion.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Button rounded={false}>See My Portfolio</Button>
        </div> */}
      </div>
      <div
        className="absolute -rotate-90 -right-[240px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="text-8xl font-extrabold text-gray-100 uppercase inline-block">
          ACADEMICS
        </span>
      </div>
    </section>
  );
};

export default AcademicBackground;
