import * as React from "react";

import { styled } from "styled-components";
import { theme } from "../components/.theme";
import { StaticImage } from "gatsby-plugin-image";
import OrdinaryDaysSection from "./components/OrdinaryDaysSection";
import Logo from "./data/images/ODLogo.png";

import Welcome from "./data/welcome.md";
import AboutTheShow from "./data/aboutTheShow.md";
import PerformanceInfo from "./data/performance.mdx";
import Acknowledgements from "./data/acknowlegements.md";
import Biographies from "./data/biographies.mdx";
import AboutTorch from "./data/aboutTorch.md";

interface IOrdyDaysProgrammeProps {}

const OrdinaryDaysMain = styled.div`
  padding: ${theme.doublePadding};
  background: ${theme.foreground};
  * {
    color: ${theme.background};
  }
`;

const OrdinaryDaysProgramme: React.FunctionComponent<
  IOrdyDaysProgrammeProps
> = (props) => {
  return (
    <OrdinaryDaysMain>
      <img
        src={Logo}
        alt="Ordinary Days Logo"
        style={{ marginTop: "4.5rem", marginBottom: "4.5rem" }}
      />
      <OrdinaryDaysSection>
        <Welcome />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <AboutTheShow />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <img
          src={Logo}
          alt="Ordinary Days Logo"
          style={{ marginTop: "4.5rem", marginBottom: "4.5rem" }}
        />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <PerformanceInfo />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <Biographies />
      </OrdinaryDaysSection>

      <OrdinaryDaysSection>
        <AboutTorch />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <Acknowledgements />
      </OrdinaryDaysSection>
    </OrdinaryDaysMain>
  );
};

export default OrdinaryDaysProgramme;
