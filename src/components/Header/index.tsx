import Button from "@components/Button";
import { useState } from "react";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { useStateContext } from "@contexts/ContextProvider";
import Hamburger from "hamburger-react";
import SVG from "react-inlinesvg";
import { scrollSmoothTo } from "@utils/lib";
import { menuItems } from "@utils/data";

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

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <StyledHeader shrink={shrink}>
      <div className="text-white h-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-full flex justify-between items-center">
          <div className="logo-container">
            <Link href="/">
              <a>
                <SVGStyled
                  src="/images/logo.svg"
                  title="Logo"
                  width={70}
                  height={70}
                  shrink={shrink}
                />
              </a>
            </Link>
          </div>
          <div className="menu-container">
            {!isMobile ? (
              <ul className="flex items-center space-x-6">
                {menuItems.map(
                  (item: { id: number; title: string; triggerBy: string }) => (
                    <a
                      key={item.id}
                      onClick={() => {
                        scrollSmoothTo(item.triggerBy);
                        setView(item.triggerBy);
                      }}
                    >
                      <MenuItemContainer shrink={shrink}>
                        <MenuItem shrink={shrink}>{item.title}</MenuItem>
                      </MenuItemContainer>
                    </a>
                  )
                )}
                <Button size="sm" sx="shine">
                  Download CV
                </Button>
              </ul>
            ) : (
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={30}
                duration={0.3}
                distance="sm"
                color={shrink ? "white" : "black"}
                rounded
              />
            )}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
