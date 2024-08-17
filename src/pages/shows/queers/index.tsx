import * as React from "react";
import { styled } from "styled-components";
import { theme } from "../components/.theme";

// Programme Content
import Welcome from "./data/welcome.md";
import AboutTorch from "./data/aboutTorch.md";
import AboutQueers from "./data/aboutQueers.md";
import PerformanceInfo from "./data/performance.mdx";
import Acknowledgements from "./data/acknowlegements.md";
// import Biographies from "./data/biographies.mdx";
import OxfordPride from "./data/oxfordPride.mdx";
import More from "./data/furtherReading.mdx";
import { QueersSection } from "./components/QueersSection";
import QueersQuote from "./components/QueersQuote";
import { StaticImage } from "gatsby-plugin-image";

interface IQueersProgrammeProps {}

const QueersMain = styled.div`
  padding: ${theme.doublePadding};
  * {
    color: ${theme.foreground};
  }
`;

const QueersProgramme: React.FunctionComponent<IQueersProgrammeProps> = (
  props
) => {
  return (
    <QueersMain>
      <QueersQuote num={7} />
      {/* Further reading and Promo */}
      <More />
      <p style={{ textAlign: "right" }}>v1.0.6</p>
    </QueersMain>
  );
};

export default QueersProgramme;
