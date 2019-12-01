import React from "react";
import Layout from "../components/Layout";
import { useSiteMetadata } from "../hooks/use-Site-Meta-Data";

const About = () => {
  const { Title, Description } = useSiteMetadata();
  return (
    <Layout
      location={"About"}
      Title={Title}
      Description={Description}
      headerClassName={"header-container-title"}
    >
      <div className={"about"}>
        <h1 className={"about-title"}>About</h1>
        <div className={"about-text"}>
          I started this development journey because I like puzzles, I like
          solving problems with computers, automating systems and processes to
          ensure we have the best life, for the benefit of all man kind. That
          level of egalitarianism may seem hooky by todays standards, steeped in
          cynasism. I have much to be grateful for, and amoung them is my
          journey into software development. Follow me as I go down this path
          with you.
        </div>
      </div>
    </Layout>
  );
};

export default About;
