import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

interface ITorchLogoProps {}

const TorchLogo: React.FunctionComponent<ITorchLogoProps> = (props) => {
  return (
    <StaticImage
      src="./torch.png"
      alt="torch logo"
      height={60}
      width={117}
      style={{ margin: 0 }}
    />
  );
};

export default TorchLogo;
