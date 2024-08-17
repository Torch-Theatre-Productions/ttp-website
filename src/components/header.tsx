import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const Header = ({}) => (
  <header
    style={{
      background: "#fae2cb",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <StaticImage src="../images/torch.png" alt="torch logo" style={{ height: "3rem", margin: 0 }} />
      {/* <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
      </Link> */}
    </div>
  </header>
);
