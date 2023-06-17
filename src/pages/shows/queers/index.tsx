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
import PerformanceInfo from "./data/performance.md";
import Acknowledgements from "./data/acknowlegements.md";
import Biographies from "./data/biographies.mdx";
import OxfordPride from "./data/oxfordPride.md";
import More from "./data/furtherReading.md";
import { QueersSection } from "./components/QueersSection";

interface IQueersProgrammeProps {}

const QueersMain = styled.main`
  padding: ${theme.doublePadding};
  background: url(${Brick}) bottom center;
  * {
    color: ${theme.foreground};
  }
`;

const QueersSectionWithBackground = styled.section`
  background: ${theme.background};
  margin: ${theme.reverseDoublePadding};
  margin-top: initial;
  margin-bottom: initial;
  padding: ${theme.doublePadding};
`;

const QueersProgramme: React.FunctionComponent<IQueersProgrammeProps> = (
  props
) => {
  return (
    <QueersMain>
      <img src={QueersLogo} />
      {/* Welcome notes */}
      <QueersSection>
        <Welcome />
      </QueersSection>

      {/* About Queers */}
      <QueersSection>
        <AboutQueers />
      </QueersSection>

      {/* Cast List/Performance Info */}
      <QueersSection>
        <PerformanceInfo />
      </QueersSection>

      {/* Bios */}
      <Biographies />

      {/* About Torch */}
      <QueersSection>
        <AboutTorch />
      </QueersSection>

      {/* Acknowledgements */}
      <QueersSection>
        <Acknowledgements />
      </QueersSection>

      {/* Pride */}
      <QueersSection>
        <OxfordPride />
      </QueersSection>

      {/* Further reading and Promo */}
      <More />
    </QueersMain>
  );
};

export default QueersProgramme;
