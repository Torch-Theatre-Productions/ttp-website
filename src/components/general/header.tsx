import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import TorchLogo from "./TorchLogo";

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
      <TorchLogo />
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
