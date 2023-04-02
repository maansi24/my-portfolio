import PortfolioCard from "@components/Cards/PortfolioCard";
import SectionTitle from "@components/SectionTitle";
import React from "react";

const portfolioData = [
  {
    id: 1,
    title:
      "Simultaneous Sustained Drug Delivery, Tracking, and On-Demand Photoactivation of DNA−Hydrogel Formulated from a BiomassDerived DNA Nanoparticle",
    desc: "Conversion of biomass into nanoparticles for meaningful biomedical applications is a formidable proposition with excellent prospects but fewer patrons.",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680435156/publication_1_ttojjv.jpg",
    link: "https://pubs.acs.org/doi/10.1021/acsabm.2c01059",
    ctaText: "Read More",
  },
  {
    id: 2,
    title:
      "Preparation and Characterization of Curcumin Incorporated Soy Protein Isolate Biopolymeric Films",
    desc: "Curcumin at different contents (0.5% to 2.5% w/w of soy protein isolate (SPI)) were incorporated in SPI films plasticized with glycerol.",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680435495/publication_2_zwsndb.jpg",
    link: "https://link.springer.com/article/10.1007/s10924-022-02566-3",
    ctaText: "Read More",
  },
  {
    id: 5,
    title:
      "Two-dimensional ultrathin metal-based nanosheets for photocatalytic CO2 conversion to solar fuels",
    desc: "The role of metal-based layers for CO2 conversion and new strategies such as surface modifications, defect generation and heterojunctions to optimize their functionalities",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680434321/publication_3_myuldv.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S0301479722004893?via%3Dihub",
    ctaText: "Read More",
  },
  {
    id: 3,
    title: "Photocatalytic carbon dioxide reduction",
    desc: "Exploring the role of ultrathin 2D graphitic carbon nitride (g-C3N4)” by Maansi Aggarwal, Soumen Basu, Nagaraj P.Shetti, Mallikarjuna, N.Nadagouda, Eilhann, E.Kwon, Young-Kwon Park, Tejraj M.Aminabhavi",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680435011/publication_3_1_t9o6sn.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1385894721029831?via%3Dihub",
    ctaText: "Read More",
  },
  {
    id: 4,
    title:
      "Photocatalytic conversion of CO2 into valuable products using emerging two-dimensional graphene-based nanomaterials",
    desc: "A step towards sustainability” by Maansi Aggarwal, Soumen Basu, Nagaraj P Shetti, Mallikarjuna N Nadagouda, Tejraj M Aminabhavi",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680434651/publication_4_bdsbex.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S138589472102982X?via%3Dihub",
    ctaText: "Read More",
  },
];

const Portfolio = () => {
  return (
    <section
      id="publications"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <SectionTitle name="Publications" title="My Publications" />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
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
