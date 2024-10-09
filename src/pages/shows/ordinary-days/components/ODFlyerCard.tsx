import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import FlyerCardImage from "../data/images/flyercard.png";

import styled from "styled-components";

const FlyerCardCSSWrapper = styled.div<{ $quoteIdx: number }>`
  width: 100%;
  display: flex;

  justify-content: center;

  .cardBG {
    text-align: center;
    display: grid;

    position: relative;

    min-height: 300px;
    max-width: 400px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10px;
      width: 100%;
      height: 100%;
      background-image: url(${FlyerCardImage});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      filter: hue-rotate(${(props) => props.$quoteIdx * 140}deg);
    }

    p {
      font-family: "dreaming-outloud-sans", sans-serif;
      font-weight: 400;
      font-style: normal;

      font-size: 1.25rem;
      grid-area: 1 / 1;
      max-width: 275;
      z-index: 1;
      align-self: center;
      justify-self: center;

      max-width: 350px;

      display: block;
      margin: 50px;
    }

    @media screen and (max-width: 400px) {
      p {
        font-size: 1rem;
        line-height: 1.1;
      }
    }

    @media screen and (max-width: 300px) {
      p {
        font-size: 0.8rem;
        line-height: 1;
      }
    }
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
      <div className="cardBG">
        <p>{quotes[quoteIdx]?.toLowerCase()}</p>
      </div>
    </FlyerCardCSSWrapper>
  );
};

export default FlyerCard;
