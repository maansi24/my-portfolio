import Button from "@components/Button";
import Logo from "@public/images/logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

const StyledHeader = styled.header<{ shrink: boolean }>`
  width: 100%;
  height: ${({ shrink }) => (shrink ? "66px" : "76px")};
  background: ${({ shrink }) => (shrink ? "rgba(0,0,0,0.95)" : "transparent")};
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s ease-in-out;
  z-index: 1000;
`;

const MenuItemContainer = styled.li<any>``;

const MenuItem = styled.a<any>`
  color: ${({ shrink, theme }) => (shrink ? theme.body : theme.text)};
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.primary2};
  }
`;

const menuItems = [
  { id: 1, title: "Home", href: "home" },
  { id: 2, title: "About", href: "about" },
  { id: 3, title: "Research", href: "research" },
  { id: 4, title: "Publications", href: "publications" },
  { id: 5, title: "Contact", href: "contact" },
];

const Header = () => {
  // const router = useRouter();
  const { y } = useWindowScroll();
  const [shrink, setShrink] = useState<boolean>(false);

  useEffect(() => {
    if (y > 20) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }, [y]);

  return (
    <StyledHeader shrink={shrink}>
      <div className="text-white h-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-full flex justify-between items-center">
          <div className="logo-container">
            <Image src={Logo} alt="Logo" width={40} />
          </div>
          <div className="menu-container">
            <ul className="flex items-center space-x-6">
              {menuItems.map(
                (item: { id: number; title: string; href: string }) => (
                  <MenuItemContainer key={item.id} shrink={shrink}>
                    <Link href={`#${item.href}`}>
                      <MenuItem shrink={shrink}>{item.title}</MenuItem>
                    </Link>
                  </MenuItemContainer>
                )
              )}
              <Button>Download CV</Button>
            </ul>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
