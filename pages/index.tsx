import About from "@sections/About";
import Contact from "@sections/Contact";
import Hero from "@sections/Hero";
import Portfolio from "@sections/Portfolio";
import Skills from "@sections/Skills";
import { profile } from "@utils/data";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import AcademicBackground from "@sections/AcademicBackground";

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
        <AcademicBackground />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default Index;
