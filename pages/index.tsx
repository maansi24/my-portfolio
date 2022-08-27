import About from "@sections/About";
import Hero from "@sections/Hero";
import { profile } from "@utils/data";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>{profile.name}</title>
        <meta
          name="description"
          content={`${profile.name.split(" ")[0]}'s Portfolio`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-area">
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Index;
