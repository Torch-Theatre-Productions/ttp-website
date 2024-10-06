import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Header } from "./header";
import "./layout.css";

const StyledMain = styled.main`
  > * {
    padding: 1.45rem 1.0875rem 1.45rem;
  }
`;

export const Layout: React.FCwC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <StyledMain>{children}</StyledMain>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};
