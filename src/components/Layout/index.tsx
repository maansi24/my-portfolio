import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";
import React from "react";
import { useStateContext } from "@contexts/ContextProvider";

const asideWidth = 500;

const AsideProfilePic = styled.img<any>`
  width: ${asideWidth}px;
  height: 100%;
  background: url("/images/profile_pic.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledMain = styled.main`
  padding-left: ${asideWidth}px;
`;

const Layout = ({
  children,
  toggleTheme,
}: {
  children: ReactNode;
  toggleTheme: () => void;
}) => {
  const { isMobile } = useStateContext();
  console.log({ isMobile });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <AsideProfilePic />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
