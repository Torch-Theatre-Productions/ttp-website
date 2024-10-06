import styled from "styled-components";
import { theme } from "../../../../components/shows/.theme";

export const OrdinaryDaysSection = styled.div`
  // min-height: calc(2 * ${theme.padding.top}rem);
  // // Pad the top and bottom
  // padding-top: ${theme.padding.top * 2}rem;
  // padding-bottom: ${theme.padding.top * 2}rem;

  // &:nth-of-type(2n - 1) {
  //   background: white;

  //   // Remove margin, replace with padding
  //   margin-left: ${theme.padding.left * -2}rem;
  //   padding-left: ${theme.padding.left * 2}rem;

  //   margin-right: ${theme.padding.left * -2}rem;
  //   padding-right: ${theme.padding.left * 2}rem;

  //   clip-path: polygon(0 0, 100% 2rem, 100% calc(100% - 2rem), 0% 100%);
  // }
  // & + *:not(&) {
  //   &,
  //   * {
  //     margin-top: ${theme.padding.top * 2}rem;
  //   }
  // }
`;

export default OrdinaryDaysSection;
