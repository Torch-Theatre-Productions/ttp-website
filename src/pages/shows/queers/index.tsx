import * as React from "react";
import { styled } from "styled-components";
import { theme } from "./components/.theme";

// Images
import Brick from "./data/images/brick.png";
import QueersLogo from "./data/images/queerslogo.png";

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

interface IQueersProgrammeProps {}

const QueersMain = styled.div`
  padding: ${theme.doublePadding};
  background: url(${Brick});
  * {
    color: ${theme.foreground};
  }
`;

const QueersProgramme: React.FunctionComponent<IQueersProgrammeProps> = (
  props
) => {
  return (
    <QueersMain>
      <img src={QueersLogo} />
      <QueersSection>
        {/* Welcome notes */}
        <Welcome />
        {/* About Queers */}
        <AboutQueers />
        <QueersQuote num={0} />
      </QueersSection>

      {/* Cast List/Performance Info */}
      <QueersSection>
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
    </QueersMain>
  );
};

export default QueersProgramme;
