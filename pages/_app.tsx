import Layout from "@components/Layout";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import "../styles/tailwind.css";
import { darkTheme, GlobalStyles, lightTheme } from "../ThemeConfig";
import React from "react";
import { ContextProvider } from "@contexts/ContextProvider";
import Head from "next/head";

// eslint-disable-next-line require-jsdoc
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ContextProvider>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default MyApp;
