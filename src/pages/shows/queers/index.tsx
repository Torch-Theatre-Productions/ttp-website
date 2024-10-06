import * as React from "react";
import { styled } from "styled-components";
import { theme } from "../components/.theme";

// Programme Content
import Welcome from "./data/welcome.md";
import AboutTorch from "./data/aboutTorch.md";
import AboutQueers from "./data/aboutQueers.md";
import PerformanceInfo from "./data/performance.mdx";
import Acknowledgements from "./data/acknowlegements.md";
import Biographies from "./data/biographies.mdx";
import OxfordPride from "./data/oxfordPride.mdx";
import More from "./data/furtherReading.mdx";
import { QueersSection } from "./components/QueersSection";
import QueersQuote from "./components/QueersQuote";
import { StaticImage } from "gatsby-plugin-image";
// @ts-ignore
import Brick from "./data/images/brick.png";

interface IQueersProgrammeProps {}

const QueersProgrammeMain = styled.div`
  padding: ${theme.doublePadding};
  background: black;
  background-image: url(${Brick});
  * {
    color: ${theme.foreground};
  }
`;

const QueersProgramme: React.FunctionComponent<IQueersProgrammeProps> = (
  props
) => {
  return (
    <QueersProgrammeMain>
      <StaticImage
        src="./data/images/queerslogocropped.png"
        alt="Queers Logo"
        imgStyle={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}
      />
      <QueersSection>
        {/* Welcome notes */}
        <Welcome />
      </QueersSection>
      {/* About Queers */}
      <QueersSection>
        <AboutQueers />
        <QueersQuote num={0} />
      </QueersSection>

      {/* Cast List/Performance Info */}
      <QueersSection>
        <StaticImage
          src="./data/images/queerslogocropped.png"
          alt="Queers Logo"
        />
        <PerformanceInfo />
      </QueersSection>

      <QueersQuote num={1} />
      {/* Bios */}
      <Biographies />

      <QueersQuote num={4} />
      {/* About Torch */}
      <QueersSection>
        <AboutTorch />
      </QueersSection>

      <QueersQuote num={5} />
      {/* Acknowledgements */}
      <QueersSection>
        <Acknowledgements />
      </QueersSection>

      <QueersQuote num={6} />
      {/* Pride */}
      <QueersSection>
        <OxfordPride />
      </QueersSection>

      <QueersQuote num={7} />
      {/* Further reading and Promo */}
      <More />
      <p style={{ textAlign: "right" }}>v1.0.6</p>
    </QueersProgrammeMain>
  );
};

export default QueersProgramme;
