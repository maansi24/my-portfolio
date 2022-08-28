import PortfolioCard from "@components/Cards/PortfolioCard";
import SectionTitle from "@components/SectionTitle";
import React from "react";

const portfolioData = [
  {
    id: 1,
    title: "Title",
    desc: "Test description",
    image:
      "https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg",
    link: "test",
    ctaText: "Explore",
  },
  {
    id: 2,
    title: "Title",
    desc: "Test description Test description Test description Test description Test description",
    image:
      "https://images.pexels.com/photos/13133195/pexels-photo-13133195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "test",
    ctaText: "Explore",
  },
  {
    id: 2,
    title: "Title",
    desc: "Test description Test description",
    image:
      "https://images.pexels.com/photos/13200712/pexels-photo-13200712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl px-4 sm:px-0">
        <SectionTitle
          name="Portfolio"
          title="See My Works Which Will Amaze You"
        />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
          {portfolioData.map((portfolio) => (
            <PortfolioCard key={portfolio.id} data={portfolio} />
          ))}
        </div>
      </div>
      <div
        className="absolute -rotate-90 -right-[225px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="text-8xl font-extrabold text-gray-100 uppercase inline-block">
          Portfolio
        </span>
      </div>
    </section>
  );
};

export default Portfolio;
