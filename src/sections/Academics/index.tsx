import SectionTitle from "@components/SectionTitle";
import { AcademicsInterface } from "@interfaces/AcademicsInterface";
import { academicsData } from "@utils/data";
import React from "react";
import styled from "styled-components";

export const ListStyled = styled.ul`
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
      className="relative flex items-center justify-center py-20 border-b min-h-fit border-b-gray-300 lg:py-32"
    >
      <div className="w-full max-w-xl px-4 sm:px-0">
        <SectionTitle name="Academic Background" />
        <div className="mt-4">
          {academicsData.map((academic: AcademicsInterface) => (
            <ListStyled key={academic.id}>
              <li className="text-xs font-semibold opacity-50">
                {academic.row.dates}
              </li>
              <li className="text-sm font-bold title">
                {academic.row.title} |{" "}
                {academic.row?.cgpa
                  ? `CGPA: ${academic.row.cgpa}/10`
                  : `Percentage: ${academic.row.percentage}%`}
              </li>
              <li className="text-sm desc text-textPrimary">
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
        <span className="inline-block font-extrabold uppercase text-8xl text-sideText">
          ACADEMICS
        </span>
      </div>
    </section>
  );
};

export default AcademicBackground;
