import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import styled from "styled-components";

const FlyerCardCSSWrapper = styled.div<{ $quoteIdx: number }>`
  text-align: center;
  display: grid;

  img {
    filter: hue-rotate(${(props) => props.$quoteIdx * 40}deg);
  }
`;

const quotes = [
  "you don't always need a plan. sometimes you just need to breathe. trust. let go. and see what happens.",
  "don't let tall buildings block the view of your dreams",
  "Life is like a blank canvas—don't be afraid to use all the colors",
  "If at first you don't succeed, try a dance break",
  "Life's too short to skip dessert—sweeten every moment!",
  "You can't change the wind, but you can always adjust your sails",
  "be the reason somebody smiles today",
];

export const FlyerCard: React.FCwC<{ quoteIdx: number }> = ({
  quoteIdx,
  ...props
}) => {
  return (
    <FlyerCardCSSWrapper $quoteIdx={quoteIdx}>
      <StaticImage
        src="../data/images/flyercard.png"
        alt="a flyer background, a quote handed out by warren"
        style={{
          position: "relative",
          zIndex: 0,
          gridArea: "1 / 1",
          maxWidth: "500px",
          alignSelf: "center",
          justifySelf: "center",
          transform: "translate(-15px)",
        }}
      />
      <p
        style={{
          fontFamily: "monospace",
          fontSize: "1.25rem",
          gridArea: "1 / 1",
          maxWidth: 275,
          zIndex: 1,
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        {quotes[quoteIdx]?.toLowerCase()}
      </p>
    </FlyerCardCSSWrapper>
  );
};

export default FlyerCard;
