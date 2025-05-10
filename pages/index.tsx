import Contact from "@sections/Contact";
import Hero from "@sections/Hero";
import Portfolio from "@sections/Portfolio";
import Skills from "@sections/Skills";
import { profile } from "@utils/data";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import AcademicBackground from "@sections/Academics";
import Experiences from "@sections/Experiences";
import Conference from "@sections/Conference";
import AwardsAndHonors from "@sections/Awards";

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

      <div className="main-area">
        <Hero />
        {/* <Research /> */}
        <AcademicBackground />
        <Skills />
        <Portfolio />
        <Conference />
        <Experiences />
        <AwardsAndHonors />
        <Contact />
      </div>
    </>
  );
};

export default Index;
