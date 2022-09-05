import React from "react";
import SectionTitle from "@components/SectionTitle";

const Research = () => {
  return (
    <section
      id="research"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <SectionTitle
          name="Research"
          title="I Am A Product Designer, Specialized In UI/UX Design &amp; Digital Design"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
      </div>
      <div
        className="absolute -rotate-90 -right-24 select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="text-8xl font-extrabold text-gray-100 uppercase inline-block">
          Research
        </span>
      </div>
    </section>
  );
};

export default Research;
