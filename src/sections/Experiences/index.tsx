import SectionTitle from "@components/SectionTitle";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const researchExp = [
  {
    title: "Research Fellow",
    description:
      "Exploring the Role of Ultra-thin 2D Graphitic Layer in the Composites of gC3N4 & GO for Photo-catalytic CO2 Reduction",
    institute: "Thapar Institute of Engineering and Technology, Patiala",
    dates: "Dec’19-July’20",
  },
  {
    title: "Summer Research Fellow",
    description:
      "Characterization of new interstellar molecules by First Principle studies",
    institute: "Indian Institute of Technology, Ropar",
    dates: "May’19-July’19",
  },
];
const teachingExp = [
  {
    title: "Teaching Experience",
    description: "Tutored the students in the Canada market for 6 months",
    institute: "",
    dates: "",
  },
  {
    title: "Teaching Assistant",
    description:
      "For the course CH103 (Introductory Chemistry) for 2 semester at IIT, Patna",
    institute: "",
    dates: "",
  },
];
const otherExp = [
  {
    title: "Student Head",
    description: "CaRe Society at Thapar",
    institute: "",
    dates: "",
  },
  {
    title: "Head and Organizer",
    description: "All the major Departmental Events at Thapar",
    institute: "",
    dates: "",
  },
];

const Experiences = () => {
  return (
    <section
      id="experience"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <SectionTitle name="Experience" />
        <div className="w-full pt-8">
          <div className="mx-auto w-full rounded-2xl bg-white">
            <Disclosure as="div" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-[#c57653]/20 px-4 py-2 text-left text-base font-medium text-[#c57653] hover:bg-[#c57653]/25 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span className={`${open ? "font-bold" : ""}`}>
                      Research Experience
                    </span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-[#c57653]`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#c57653]/5 rounded-lg">
                      {researchExp.map((research) => (
                        <div
                          key={research.title}
                          className="mt-2 border p-4 rounded-md shadow-md"
                        >
                          <span className="text-xs text-gray-400">
                            {research.dates}
                          </span>
                          <h4 className="font-bold text-[#c57653]">
                            {research.title}
                          </h4>
                          <p>
                            {research.description} ({research.institute})
                          </p>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-[#c57653]/20 px-4 py-2 text-left text-base font-medium text-[#c57653] hover:bg-[#c57653]/25 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span className={`${open ? "font-bold" : ""}`}>
                      Teaching Experience
                    </span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-[#c57653]`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#c57653]/5 rounded-lg">
                      {teachingExp.map((research) => (
                        <div
                          key={research.title}
                          className="mt-2 border p-4 rounded-md shadow-md"
                        >
                          <span className="text-xs text-gray-400">
                            {research.dates}
                          </span>
                          <h4 className="font-bold text-[#c57653]">
                            {research.title}
                          </h4>
                          <p>{research.description}</p>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-[#c57653]/20 px-4 py-2 text-left text-base font-medium text-[#c57653] hover:bg-[#c57653]/25 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span>Other Experience</span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-[#c57653]`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#c57653]/5 rounded-lg">
                      {otherExp.map((research) => (
                        <div
                          key={research.title}
                          className="mt-2 border p-4 rounded-md shadow-md"
                        >
                          <span className="text-xs text-gray-400">
                            {research.dates}
                          </span>
                          <h4 className="font-bold text-[#c57653]">
                            {research.title}
                          </h4>
                          <p>{research.description}</p>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      {/* <div
        className="absolute -rotate-90 -right-[300px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="text-8xl font-extrabold text-gray-100 uppercase inline-block">
          Experiences
        </span>
      </div> */}
    </section>
  );
};

export default Experiences;
