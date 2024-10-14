import * as React from "react";

import { styled } from "styled-components";
import { theme } from "../../../components/shows/.theme";
import OrdinaryDaysSection from "./components/OrdinaryDaysSection";
import Logo from "./data/images/ODLogo.png";
import LogoWithGwon from "./data/images/ODLogoWithGwon.png";
import Biographies, {
  bioQuery,
  pivotBiographyData,
} from "../../../components/shows/Biographies";

import Welcome from "./data/welcome.md";
import AboutTheShow from "./data/aboutTheShow.md";
import PerformanceInfo from "./data/performance.mdx";
import Acknowledgements from "./data/acknowlegements.mdx";
import AboutTorch from "./data/aboutTorch.md";
import { graphql } from "gatsby";
import Bio, { IBioProps } from "../../../components/shows/Bio";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { FlyerCard } from "./components/ODFlyerCard";
import TorchLogo from "../../../components/general/TorchLogo";
import Helmet from "react-helmet";
import FallingFlyers from "./components/ODFallingFlyers";
import Flutter3 from "./data/Flutter3.webp";

interface IOrdyDaysProgrammeProps {
  data: any;
}

const OrdinaryDaysMain = styled.div`
  padding: ${theme.doublePadding};
  background: ${theme.foreground};
  * {
    color: ${theme.background};
  }
  overflow-x: hidden;
`;
const bioConfig = require("./data/bios/bios.json");

const ODBioWrapper = styled.div`
  display: grid;
  margin-bottom: 2rem;

  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  grid-row-gap: 1rem;

  .bio-image {
    grid-row: 2;
    grid-column: 1;

    place-self: center;

    > div {
      max-height: 45vh;
    }

    @media screen and (min-width: 900px) {
      img {
        image-rendering: auto;
        max-height: 20rem;
      }

      grid-row: 2 / -1;
      justify-self: left;
      align-self: start;
    }
  }

  .bio-header {
    > * {
      margin-bottom: 0;
    }
    grid-column: 1;
    grid-row: 1;
    @media screen and (min-width: 900px) {
      align-self: center;

      grid-column: 1;
      grid-row: 1;
    }
  }

  .bio-bio {
    grid-column: 1;
    grid-row: 3;
    @media screen and (min-width: 900px) {
      align-self: start;
      grid-column: 2;
      grid-row: 2;
      transform: translateY(-4px);
    }
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 4rem 1fr;

    grid-column-gap: 2rem;
  }
`;

const ODBioRender: React.FCwC<IBioProps> = ({
  name,
  role,
  image,
  roleIn,
  bio,
  className,
}) => {
  const roleString = Array.isArray(role) ? role.join(", ") : role;
  const inString = Array.isArray(roleIn) ? roleIn.join(", ") : roleIn;
  image = getImage(image || null);
  return (
    <ODBioWrapper className={className}>
      {image && (
        <div className="bio-image">
          <GatsbyImage
            image={image}
            alt={`${name} headshot`}
            objectFit="contain"
          />
        </div>
      )}
      <div className="bio-header">
        <h3 className="bio-name">{name}</h3>
        <p className="bio-role-and-in-string">
          <b>{roleString}</b>
          <span>
            {inString ? (
              <span>
                {` - `}
                <i>{inString}</i>
              </span>
            ) : undefined}
          </span>
        </p>
      </div>
      <div className="bio-bio">{bio || undefined}</div>
    </ODBioWrapper>
  );
};

const LogoWithStyling: React.FCwC<{ style?: any }> = ({ style, ...props }) => {
  return (
    <div style={{ textAlign: "center", position: "relative", zIndex: 1000 }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={Logo}
          alt="Ordinary Days Logo Blurred"
          style={{
            marginBottom: "0rem",
            marginTop: "1rem",
            maxHeight: "10vh",
            marginLeft: "auto",
            marginRight: "auto",
            filter: "blur(6px)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            opacity: 0.15,
          }}
        />
        <img
          src={Logo}
          alt="Ordinary Days Logo"
          style={{
            marginBottom: "0rem",
            marginTop: "1rem",
            maxHeight: "10vh",
            marginLeft: "auto",
            marginRight: "auto",
            ...style,
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
      <h2
        style={{
          fontFamily: "'century old style', century",
          textShadow: "0px 2px 5px rgba(0,0,0,0.15)",
        }}
      >
        music and lyrics by adam gwon
      </h2>
    </div>
  );
};

const OrdinaryDaysProgramme: React.FunctionComponent<
  IOrdyDaysProgrammeProps
> = ({ data, ...props }) => {
  const dataByName = pivotBiographyData(data);
  return (
    <OrdinaryDaysMain>
      <FallingFlyers />
      <LogoWithStyling />
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/wec7lrm.css" />
      </Helmet>
      <OrdinaryDaysSection
        style={{ textAlign: "center", position: "relative", zIndex: 0 }}
      >
        <StaticImage
          src={"./data/images/ArtworkHero.png"}
          alt="silhouette in front of an artpiece"
          style={{
            maxHeight: "70vh",
            objectFit: "contain",
            marginBottom: "4.5rem",
            zIndex: -1,
          }}
          imgStyle={{
            objectFit: "contain",
            borderRadius: "3rem",
            zIndex: -1,
          }}
        />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <Welcome />
        <FlyerCard />
      </OrdinaryDaysSection>
      {/* <OrdinaryDaysSection>
        <AboutTheShow />
        <FlyerCard />
      </OrdinaryDaysSection> */}
      <OrdinaryDaysSection>
        <LogoWithStyling />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <PerformanceInfo />
        <FlyerCard />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <h1>Biographies</h1>
        <h2>Creative team</h2>
        <Biographies
          render={ODBioRender}
          configuration={bioConfig.bios.filter(
            (b: any, idx: number) => b.category === "creative"
          )}
          data={dataByName}
        />
        <FlyerCard />
        <h2>Cast</h2>
        <Biographies
          render={ODBioRender}
          configuration={bioConfig.bios.filter(
            (b: any, idx: number) => b.category === "cast"
          )}
          data={dataByName}
        />
        <FlyerCard />
        <h2>Production team</h2>
        <Biographies
          render={ODBioRender}
          configuration={bioConfig.bios.filter(
            (b: any, idx: number) => b.category === "production"
          )}
          data={dataByName}
        />
      </OrdinaryDaysSection>
      <FlyerCard />
      {/* <OrdinaryDaysSection>
        <AboutTorch />
      </OrdinaryDaysSection> */}
      {/* <FlyerCard /> */}
      {/* <OrdinaryDaysSection>
        <Acknowledgements />
      </OrdinaryDaysSection> */}
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <TorchLogo />
      </div>
    </OrdinaryDaysMain>
  );
};

export const query = graphql`
  query ($biosDataPath: String) {
    headshots: allFile(
      filter: {
        relativePath: { regex: $biosDataPath }
        extension: { eq: "jpg" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    bioData: allFile(
      filter: {
        relativePath: { regex: $biosDataPath }
        extension: { eq: "md" }
      }
    ) {
      nodes {
        id
        name
        childMdx {
          body
        }
      }
    }
  }
`;

export default OrdinaryDaysProgramme;
