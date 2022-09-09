import SectionTitle from "@components/SectionTitle";
import { AcademicsInterface } from "@interfaces/AcademicsInterface";
import { academicsData } from "@utils/data";
import React from "react";
import styled from "styled-components";

const ListStyled = styled.ul`
  padding: 0.5rem;

  & li.title {
    color: ${({ theme }) => theme.colors.primary2};
  }

  & li.dates {
    opacity: 0.5;
  }
`;

const AcademicBackground = () => {
  return (
    <section
      id="academics"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <SectionTitle name="Academic Background" />
        <div className="mt-4">
          {academicsData.map((academic: AcademicsInterface) => (
            <ListStyled key={academic.id}>
              <li className="dates font-bold text-xs">{academic.row.dates}</li>
              <li className="title font-bold text-sm">
                {academic.row.title} |{" "}
                {academic.row?.cgpa
                  ? `CGPA: ${academic.row.cgpa}/10`
                  : `Percentage: ${academic.row.percentage}%`}
              </li>
              <li className="desc text-sm text-textPrimary">
                {academic.row.organization}
              </li>
            </ListStyled>
          ))}
        </div>
      </div>
      <div
        className="absolute -rotate-90 -right-[240px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="text-8xl font-extrabold text-sideText uppercase inline-block">
          ACADEMICS
        </span>
      </div>
    </section>
  );
};

export default AcademicBackground;
