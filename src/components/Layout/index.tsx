import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import React from "react";
import { useWindowSize } from "react-use";

const AsideProfilePic = styled.img<any>`
  width: ${({ width }) => width}px;
  height: 100%;
  background: url("/images/profile_pic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    background: url(/images/profile_pic.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 156%;
    position: static;
  }
`;

const StyledMain = styled.main<any>`
  padding-left: ${({ width }) => width}px;
`;

const Layout = ({
  children,
  toggleTheme,
}: {
  children: ReactNode;
  toggleTheme: () => void;
}) => {
  const { width } = useWindowSize();

  const [asideWidth, setAsideWidth] = useState(500);

  const asideWidthFxn = (w: number) => {
    if (w < 1536) setAsideWidth(500);
    if (w < 1200) setAsideWidth(320);
    if (w < 1024) setAsideWidth(0);
  };

  useEffect(() => {
    if (window !== undefined) asideWidthFxn(width);
  }, [width]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <AsideProfilePic width={asideWidth} />
      <StyledMain width={asideWidth}>{children}</StyledMain>
    </>
  );
};

export default Layout;
