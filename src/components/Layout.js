import React from "react";
import { graphql } from "gatsby";
import Header from "./header";

const Layout = props => {
  return (
    <div className={"layout-container"}>
      <Header title={props.Title} className={props.headerClassName} />
      <p>{props.Description}</p>
      {props.children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;

export const staticQuery = graphql`
  query {
    site {
      siteMetadata {
        Title
        Description
      }
    }
  }
`;
