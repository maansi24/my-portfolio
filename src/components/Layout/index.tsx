import { profile } from "@utils/data";
import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";
import React from "react";

const asideWidth = 500;

const BackgroundImage = styled.img<any>`
  width: ${asideWidth}px;
  height: 100%;
  background: ${({ imgSrc }) => imgSrc && `url(${imgSrc})`};
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledMain = styled.main`
  padding-left: ${asideWidth}px;
  padding-top: 100px;
`;

const Layout = ({
  children,
  toggleTheme,
}: {
  children: ReactNode;
  toggleTheme: () => void;
}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <BackgroundImage imgSrc={profile.image} />
      <StyledMain>
        <button onClick={toggleTheme}>Switch Theme</button>
        {children}
      </StyledMain>
    </>
  );
};

export default Layout;
