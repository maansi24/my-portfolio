import Button from "@components/Button";
import { Fragment, useState } from "react";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { useStateContext } from "@contexts/ContextProvider";
import Hamburger from "hamburger-react";
import SVG from "react-inlinesvg";
import { scrollSmoothTo } from "@utils/lib";
import { menuItems } from "@utils/data";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";

const StyledHeader = styled.header<{ shrink: boolean }>`
  width: 100%;
  height: ${({ shrink }) => (shrink ? "66px" : "76px")};
  background: ${({ shrink }) => (shrink ? "rgba(0,0,0,0.95)" : "transparent")};
  box-shadow: ${({ shrink }) =>
    shrink
      ? "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
      : ""};
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  transition-property: height, background, box-shadow;
  z-index: 1000;
`;

const MenuItemContainer = styled.li<any>``;

const MenuItem = styled.a<any>`
  color: ${({ shrink, theme, active }) =>
    active ? theme.colors.primary2 : shrink ? theme.body : theme.text};
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary2};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary2};
  }
`;

const SVGStyled = styled(SVG)<any>`
  transition: fill 0.3s ease-in-out;
  & g {
    fill: ${({ shrink, theme }) => (shrink ? theme.body : theme.text)};
  }
`;

const Header = () => {
  const { isMobile, shrink, setView } = useStateContext();

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const downloadCV = () => {
    if (window && typeof window !== undefined) {
      window.open("/files/Maansi CV.pdf", "_blank");
    }
  };

  const toggleMobileMenu = () => {
    setOpenMobileMenu((prevState) => !prevState);
  };

  return (
    <StyledHeader shrink={shrink}>
      <div className="h-full px-4 mx-auto text-white max-w-7xl sm:px-6">
        <div className="flex items-center justify-between h-full">
          <div className="logo-container">
            <Link href="/">
              <a>
                <SVGStyled
                  src="/images/logo.svg"
                  title="Logo"
                  width={70}
                  height={70}
                  shrink={shrink ? true : false}
                />
              </a>
            </Link>
          </div>
          <div className="menu-container">
            {!isMobile ? (
              <ul className="flex items-center space-x-6">
                {menuItems.map(
                  (item: { id: number; title: string; triggerBy: string }) => (
                    <MenuItemContainer key={item.id} shrink={shrink}>
                      <MenuItem
                        shrink={shrink}
                        onClick={() => {
                          scrollSmoothTo(item.triggerBy);
                          setView(item.triggerBy);
                        }}
                      >
                        {item.title}
                      </MenuItem>
                    </MenuItemContainer>
                  )
                )}
                <Button size="sm" sx="shine" onClick={downloadCV}>
                  Download CV
                </Button>
              </ul>
            ) : (
              <>
                <Hamburger
                  toggled={openMobileMenu}
                  toggle={toggleMobileMenu}
                  size={30}
                  duration={0.3}
                  distance="sm"
                  color={shrink ? "white" : "black"}
                  rounded
                />
                <Transition.Root show={openMobileMenu} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-30 w-full"
                    onClose={() => {}}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pointer-events-none">
                          <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                          >
                            <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                              <div
                                className={classNames(
                                  `flex flex-col h-full py-6 overflow-y-scroll shadow-xl`,
                                  shrink ? "bg-black" : "bg-white"
                                )}
                              >
                                <div className="px-4 sm:px-6">
                                  <div className="h-10" />
                                </div>
                                <div className="relative flex-1 px-4 mt-6 sm:px-6">
                                  <ul className="flex flex-col space-y-4">
                                    {menuItems.map(
                                      (item: {
                                        id: number;
                                        title: string;
                                        triggerBy: string;
                                      }) => (
                                        <MenuItemContainer
                                          key={item.id}
                                          shrink={shrink}
                                        >
                                          <MenuItem
                                            shrink={shrink}
                                            isMobile={isMobile}
                                            onClick={() => {
                                              toggleMobileMenu();
                                              scrollSmoothTo(item.triggerBy);
                                              setView(item.triggerBy);
                                            }}
                                            className="text-2xl sm:text-base"
                                          >
                                            {item.title}
                                          </MenuItem>
                                        </MenuItemContainer>
                                      )
                                    )}
                                  </ul>
                                  <div className="h-[1px] border my-4 max-w-[250px] mx-auto" />
                                  <div className="w-full text-center">
                                    <Button
                                      sx="shine mt-2"
                                      onClick={downloadCV}
                                    >
                                      Download CV
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </>
            )}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
