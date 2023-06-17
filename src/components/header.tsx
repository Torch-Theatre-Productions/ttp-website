import React from "react";
import { Link } from "gatsby";
import TorchLogo from "../images/torch.png";

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
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img src={TorchLogo} style={{ height: "3rem", margin: 0 }} />
      </Link>
    </div>
  </header>
);
