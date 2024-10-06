import * as React from "react";

import { styled } from "styled-components";
import { theme } from "../components/.theme";
import OrdinaryDaysSection from "./components/OrdinaryDaysSection";
import Logo from "./data/images/ODLogo.png";
import LogoWithGwon from "./data/images/ODLogoWithGwon.png";
import Biographies, {
  bioQuery,
  pivotBiographyData,
} from "../components/Biographies";

import Welcome from "./data/welcome.md";
import AboutTheShow from "./data/aboutTheShow.md";
import PerformanceInfo from "./data/performance.mdx";
import Acknowledgements from "./data/acknowlegements.md";
import AboutTorch from "./data/aboutTorch.md";
import { graphql } from "gatsby";
import Bio, { IBioProps } from "../components/Bio";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { FlyerCard } from "./components/ODFlyerCard";

interface IOrdyDaysProgrammeProps {
  data: any;
}

const OrdinaryDaysMain = styled.div`
  padding: ${theme.doublePadding};
  background: ${theme.foreground};
  * {
    color: ${theme.background};
  }
`;
const bioConfig = require("./data/bios/bios.json");

const ODBioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 4rem 1fr;

  grid-column-gap: 2rem;

  .bio-image {
    height: unset;
    width: unset;
    max-height: 20rem;

    grid-row: 1 / -1;

    border-radius: 5px;

    img {
      image-rendering: auto;
    }
  }

  .bio-header {
    grid-column: 2;
    grid-row: 1;
    > * {
      margin-bottom: 0;
    }
    align-self: center;
  }

  .bio-bio {
    grid-column: 2;
    grid-row: 2;

    align-self: center;
  }

  margin-bottom: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;

    grid-row-gap: 1rem;

    .bio-image {
      grid-row: 2;
      grid-column: 1;
      max-height: 50vh;
      max-width: 75%;
      justify-self: center;

      img {
        object-fit: cover;
        object-position: top;
      }
    }

    .bio-header {
      grid-column: 1;
      grid-row: 1;
      // text-align: center;
    }

    .bio-bio {
      grid-column: 1;
      grid-row: 3;
      // text-align: center;
    }
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
        <GatsbyImage
          className="bio-image"
          image={image}
          alt={`${name} headshot`}
        />
      )}
      <div className="bio-header">
        <h2 className="bio-name">{name}</h2>
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
    <div style={{ textAlign: "center" }}>
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
        }}
      />
      <h2 style={{ fontFamily: "Century" }}>music and lyrics by adam gwon</h2>
    </div>
  );
};

const OrdinaryDaysProgramme: React.FunctionComponent<
  IOrdyDaysProgrammeProps
> = ({ data, ...props }) => {
  const dataByName = pivotBiographyData(data);
  return (
    <OrdinaryDaysMain>
      <OrdinaryDaysSection style={{ textAlign: "center" }}>
        <LogoWithStyling />
        <StaticImage
          src={"./data/images/ArtworkHero.png"}
          alt="silhouette in front of an artpiece"
          style={{
            maxHeight: "70vh",
            objectFit: "contain",
            marginBottom: "4.5rem",
          }}
          imgStyle={{
            objectFit: "contain",
            borderRadius: "3rem",
          }}
        />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <Welcome />
        <FlyerCard quoteIdx={0} />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <AboutTheShow />
        <FlyerCard quoteIdx={1} />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <LogoWithStyling />
      </OrdinaryDaysSection>
      <OrdinaryDaysSection>
        <PerformanceInfo />
        <FlyerCard quoteIdx={3} />
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
        <FlyerCard quoteIdx={3} />
        <h2>Cast</h2>
        <Biographies
          render={ODBioRender}
          configuration={bioConfig.bios.filter(
            (b: any, idx: number) => b.category === "cast"
          )}
          data={dataByName}
        />
        <FlyerCard quoteIdx={4} />
        <h2>Production team</h2>
        <Biographies
          render={ODBioRender}
          configuration={bioConfig.bios.filter(
            (b: any, idx: number) => b.category === "production"
          )}
          data={dataByName}
        />
      </OrdinaryDaysSection>
      <FlyerCard quoteIdx={5} />
      <OrdinaryDaysSection>
        <AboutTorch />
      </OrdinaryDaysSection>
      <FlyerCard quoteIdx={6} />
      <OrdinaryDaysSection>
        <Acknowledgements />
      </OrdinaryDaysSection>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <StaticImage
          src="../../../components/torch.png"
          alt="torch logo"
          height={60}
          width={117}
        />
      </div>
    </OrdinaryDaysMain>
  );
};

export const query = graphql`
  query ($biosDataPath: String!) {
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

// export const query = bioQuery();

export default OrdinaryDaysProgramme;
