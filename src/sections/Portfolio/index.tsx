import PortfolioCard from "@components/Cards/PortfolioCard";
import SectionTitle from "@components/SectionTitle";
import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck } from "react-icons/hi";
import { HiChevronUpDown } from "react-icons/hi2";

const portfolioData = [
  {
    title: "Bromine-doped carbon dot",
    desc: "Concentration-dependent multicolor emission is an unusual yet appealing photoluminescence property of various carbonaceous nanomaterials with interesting potential applications.",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1746817780/Screenshot_2025-05-10_003921_nc0vga.png",
    link: "https://link.springer.com/article/10.1007/s42823-024-00796-0",
    publicationDate: "Aug 29, 2024",
    year: "2024",
  },
  {
    title: "Carbonized Polymer Dot-Tannic Acid Nanoglue",
    desc: "Nanotizing biosealant components offer a multitude of chemical functionalities for superior adhesion–cohesion, delivering unique properties for comprehensive wound healing that are otherwise impossible to achieve using commercial variants.",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1746817629/Screenshot_2025-05-10_003631_lvmvly.png",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202405531",
    publicationDate: "Aug 15, 2024",
    year: "2024",
  },
  {
    title: "Multifunctional Self-Healing Carbon Dot–Gelatin Bioadhesive",
    desc: "Improved Tissue Adhesion with Simultaneous Drug Delivery, Optical Tracking, and Photoactivated Sterilization.",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1714902659/Screenshot_2024-05-05_095434_a3duh2.png",
    link: "https://pubs.acs.org/doi/full/10.1021/acs.biomac.4c00313",
    publicationDate: "Apr 17, 2024",
    year: "2024",
  },
  {
    title:
      "Machine Learning-Mediated Ultrasensitive Detection of Citrinin and Associated Mycotoxins in Real Food Samples Discerned from a Photoluminescent Carbon Dot Barcode Array",
    desc: "Economically viable remote sensing of foodborne contaminants using minimalistic chemical reagents and simultaneous automation calls for a concrete integration of a chemical detection strategy with artificial intelligence.  ",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1714902556/Screenshot_2024-05-05_151843_xdd35b.png",
    link: "https://pubs.acs.org/doi/full/10.1021/acs.jafc.3c04846",
    publicationDate: "Aug 16, 2023",
    year: "2023",
  },
  {
    title:
      "Simultaneous Sustained Drug Delivery, Tracking, and On-Demand Photoactivation of DNA−Hydrogel Formulated from a BiomassDerived DNA Nanoparticle",
    desc: "Conversion of biomass into nanoparticles for meaningful biomedical applications is a formidable proposition with excellent prospects but fewer patrons.",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680435156/publication_1_ttojjv.jpg",
    link: "https://pubs.acs.org/doi/10.1021/acsabm.2c01059",
    publicationDate: "Mar 10, 2023",
    year: "2023",
  },
  {
    title:
      "Preparation and Characterization of Curcumin Incorporated Soy Protein Isolate Biopolymeric Films",
    desc: "Curcumin at different contents (0.5% to 2.5% w/w of soy protein isolate (SPI)) were incorporated in SPI films plasticized with glycerol.",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680435495/publication_2_zwsndb.jpg",
    link: "https://link.springer.com/article/10.1007/s10924-022-02566-3",
    publicationDate: "Sep 02, 2022",
    year: "2022",
  },
  {
    title:
      "Two-dimensional ultrathin metal-based nanosheets for photocatalytic CO2 conversion to solar fuels",
    desc: "The role of metal-based layers for CO2 conversion and new strategies such as surface modifications, defect generation and heterojunctions to optimize their functionalities",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680434321/publication_3_myuldv.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S0301479722004893?via%3Dihub",
    publicationDate: "Mar 31, 2022",
    year: "2022",
  },
  {
    title:
      "Photocatalytic conversion of CO2 into valuable products using emerging two-dimensional graphene-based nanomaterials",
    desc: "A step towards sustainability” by Maansi Aggarwal, Soumen Basu, Nagaraj P Shetti, Mallikarjuna N Nadagouda, Tejraj M Aminabhavi",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680434651/publication_4_bdsbex.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S138589472102982X?via%3Dihub",
    publicationDate: "Aug 04, 2021",
    year: "2021",
  },
  {
    title: "Photocatalytic carbon dioxide reduction",
    desc: "Exploring the role of ultrathin 2D graphitic carbon nitride (g-C3N4)” by Maansi Aggarwal, Soumen Basu, Nagaraj P.Shetti, Mallikarjuna, N.Nadagouda, Eilhann, E.Kwon, Young-Kwon Park, Tejraj M.Aminabhavi",
    image:
      "https://res.cloudinary.com/manavkaushal/image/upload/v1680435011/publication_3_1_t9o6sn.jpg",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1385894721029831?via%3Dihub",
    publicationDate: "Aug 03, 2021",
    year: "2021",
  },
];

const Portfolio = () => {
  const years = [...new Set(portfolioData.map((item) => item.year))];
  const [selected, setSelected] = useState("all");

  const filteredPublications =
    selected === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.year === selected);

  return (
    <section
      id="publications"
      className="relative flex items-center justify-center h-full py-20 border-b border-b-gray-300 lg:py-32"
    >
      <div className="w-full max-w-xl px-4 sm:px-0 min-h-[800px] relative">
        <SectionTitle name="Publications" title="My Publications" />
        <div className="absolute top-4 right-4 w-[125px]">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block capitalize truncate">{selected}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <HiChevronUpDown
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {["all", ...years].map((year, idx) => (
                    <Listbox.Option
                      key={idx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 duration-200 ${
                          active
                            ? "bg-brownPrimary/20 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={year}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate capitalize  ${
                              selected
                                ? "font-medium text-amber-900"
                                : "font-normal"
                            }`}
                          >
                            {year}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brownPrimary">
                              <HiCheck className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className="grid grid-cols-1 mt-8 gap-x-4 gap-y-8 sm:grid-cols-2 justify-items-center">
          {filteredPublications.map((portfolio) => (
            <PortfolioCard key={portfolio.link} data={portfolio} />
          ))}
        </div>
      </div>
      <div
        className="absolute -rotate-90 -right-[320px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="inline-block font-extrabold text-gray-100 uppercase text-8xl">
          Publications
        </span>
      </div>
    </section>
  );
};

export default Portfolio;
