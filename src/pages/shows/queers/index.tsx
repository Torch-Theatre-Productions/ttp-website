import * as React from "react";
import { theme } from "./components/.theme";

import Welcome from "./data/welcome.md";
import AboutTorch from "./data/aboutTorch.md";
import AboutQueers from "./data/aboutQueers.md";
import PerformanceInfo from "./data/performance.md";
import Acknowledgements from "./data/acknowlegements.md";
import Biographies from "./data/biographies.mdx";
import OxfordPride from "./data/oxfordPride.md";
import More from "./data/furtherReading.md";
import { styled } from "styled-components";

interface IQueersProgrammeProps {}

const QueersSection = styled.section`
  background: ${theme.background};
`;

const QueersProgramme: React.FunctionComponent<IQueersProgrammeProps> = (
  props
) => {
  return (
    <>
      {/* Welcome notes */}
      <QueersSection>
        <Welcome />
      </QueersSection>
      {/* About Queers */}
      <AboutQueers />
      {/* Cast List/Performance Info */}
      <PerformanceInfo />
      {/* Bios */}
      <Biographies />
      {/* About Torch */}
      <AboutTorch />
      {/* Acknowledgements */}
      <Acknowledgements />
      {/* Pride */}
      <OxfordPride />
      {/* Further reading and Promo */}
      <More />
    </>
  );
};

export default QueersProgramme;
