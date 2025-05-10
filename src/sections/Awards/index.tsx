import SectionTitle from "@components/SectionTitle";
import { FaAward } from "react-icons/fa";
import React from "react";
import { BaseCard } from "@components/Cards";

const awardsData = [
  {
    id: 0,
    content: "Best Poster Award at FINS Conference",
    year: "2024",
  },
  {
    id: 1,
    content: "PMRF Research Grant in Biomedical Engineering",
    year: "2022",
  },
  {
    id: 2,
    content: "GATE Qualified (Chemistry)",
    year: "2021",
  },
  {
    id: 3,
    content: "IIT JAM Qualified (Chemistry)",
    year: "2018",
  },
  {
    id: 4,
    content:
      "Merit Scholarship during M.Sc. awarded by Thapar Institute of Engineering and Technology",
    year: "2018",
  },
  {
    id: 5,
    content: "Merit Scholarship during B.Sc. awarded by Punjab University",
    year: "2015",
  },
];

const AwardsAndHonors = () => {
  return (
    <section
      id="awards"
      className="relative flex items-center justify-center py-20 border-b min-h-fit border-b-gray-300 lg:py-32"
    >
      <div className="w-full max-w-xl px-4 sm:px-0">
        <SectionTitle name="Awards" title="Awards & Honors" />
        <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2">
          {awardsData.map((award, index) => (
            <BaseCard key={award.id}>
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 gap-2 mt-1 text-emerald-600">
                  <FaAward className="w-5 h-5" />
                  <p className="font-semibold">{award.year}</p>
                </div>
              </div>
              <p className="mt-1 text-sm font-medium leading-snug text-textPrimary">
                {award.content}
              </p>
            </BaseCard>
          ))}
        </div>
      </div>

      <div
        className="absolute -rotate-90 -right-[135px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="inline-block font-extrabold uppercase text-8xl text-sideText">
          HONORS
        </span>
      </div>
    </section>
  );
};

export default AwardsAndHonors;
