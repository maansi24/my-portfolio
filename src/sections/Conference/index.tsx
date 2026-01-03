import SectionTitle from "@components/SectionTitle";
import { ListStyled } from "@sections/Academics";
import React from "react";

const conferenceData = [
  {
    id: 2,
    content:
      "&mdash; Material Research Meeting (MRM 2025) at <b>Pacifico Yokohama, Japan</b>",
  },
  {
    id: 2,
    content:
      "&mdash; International Conference on <b>Chemistry for Sustainability</b> (ICCS 2025) at <b>IIT Hyderabad</b>",
  },
  {
    id: 2,
    content:
      "&mdash; <b>Frontiers in Nanomaterials Science:</b> Aspects in Biotechnology and Chemical Engineering (FINS 2024) at <b>NIT, Patna</b>",
  },
  {
    id: 1,
    content:
      "&mdash; <b>18<sup>th</sup> International Conference</b> on Biomedical Engineering (ICBME 2024) at <b>NUS, Singapore</b>",
  },
  {
    id: 3,
    content:
      "&mdash; Recent Trends in Chemical Science and Technology (RTCST 2024) at <b>IIT Patna</b>",
  },
  {
    id: 4,
    content:
      "&mdash; <b>8<sup>th</sup> International Conference</b> on Advanced Nanomaterial and Nanotechnology (ICANN 2023) at <b>IIT, Guwahati</b>",
  },
];

const Conference = () => {
  return (
    <section
      id="conference"
      className="relative flex items-center justify-center h-full py-20 border-b border-b-gray-300 lg:py-32"
    >
      <div className="w-full max-w-xl px-4 sm:px-0 min-h-[800px] relative">
        <SectionTitle name="Conferences Attended" />
        <div className="mt-8 space-y-4">
          {conferenceData.map((conference) => (
            <ListStyled key={conference.id}>
              <li
                className="text-sm leading-snug text-textPrimary"
                dangerouslySetInnerHTML={{ __html: conference.content }}
              />
            </ListStyled>
          ))}
        </div>
      </div>

      <div
        className="absolute -rotate-90 -right-[275px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="inline-block font-extrabold text-gray-100 uppercase text-8xl">
          Conference
        </span>
      </div>
    </section>
  );
};

export default Conference;
