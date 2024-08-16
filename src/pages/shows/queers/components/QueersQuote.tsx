import * as React from "react";
import styled from "styled-components";
import { theme } from "../../components/.theme";

const QuoteWrapper = styled.blockquote`
  position: relative;
  background-color: ${theme.background}aa;
  border-radius: 0 2rem 2rem 0;
  border: none;
  border-left: 5px solid ${theme.foreground};
  quotes: "“" "”";

  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 1.5rem;
  text-align: center;
  font-style: italic;

  margin-left: -${theme.padding.left}rem;
  margin-right: -${theme.padding.left}rem;
  margin-left: 0;
  margin-right: 0;
  padding: ${theme.defaultPadding};

  & *:first-child {
    position: relative;
    margin-top: ${theme.padding.top * 3}rem;
    margin-bottom: ${theme.padding.top * 3}rem;
  }

  & *:first-child:before,
  & *:first-child:after {
    content: open-quote;
    position: absolute;
    font-weight: bold;
    font-style: initial;
    font-size: 100px;
  }

  & *:first-child:before {
    top: -${theme.padding.top * 1.5}rem;
    left: ${theme.padding.left * 0.25}rem;
  }

  & *:first-child:after {
    content: close-quote;
    position: absolute;
    right: ${theme.padding.left * 0.25}rem;
    bottom: -${theme.padding.top * 3}rem;
  }

  && a {
    display: block;
    margin: 0;
    text-align: right;
  }
`;

const quotes = require("../data/quotes.json");

interface IQueersQuoteProps {
  num: number;
}

const QueersQuote: React.FunctionComponent<IQueersQuoteProps> = (props) => {
  return (
    <QuoteWrapper>
      <p>{quotes[props.num]}</p>
      <a href="https://www.stonewall.org.uk/cy/lgbtq-facts-and-figures">
        stonewall.org.uk
      </a>
    </QuoteWrapper>
  );
};

export default QueersQuote;
