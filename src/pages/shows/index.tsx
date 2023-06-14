import { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const Shows: React.FunctionComponent<PageProps> = (props) => {
  return (
    <div>
      <p>Shows - Coming soon</p>
    </div>
  );
};

export default Shows;

export const Head: HeadFC = () => (
  <title>Shows - Torch Theatre Productions</title>
);
