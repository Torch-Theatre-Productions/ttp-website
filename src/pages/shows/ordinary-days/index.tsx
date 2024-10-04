import * as React from "react";

import { styled } from "styled-components";
import { theme } from "../components/.theme";

interface IOrdyDaysProgrammeProps {}

const OrdinaryDaysMain = styled.div`
  padding: ${theme.doublePadding};
  background: black;
  background-image: url("./data/images/brick.png");
  * {
    color: ${theme.foreground};
  }
`;

const OrdinaryDaysProgramme: React.FunctionComponent<
  IOrdyDaysProgrammeProps
> = (props) => {
  return <OrdinaryDaysMain>Hey</OrdinaryDaysMain>;
};

export default OrdinaryDaysProgramme;
