import * as React from "react";
import * as path from "path";
import { IBioProps, default as Bio } from "../../../../components/shows/Bio";
import { graphql, useStaticQuery } from "gatsby";
import { QueersSection } from "./QueersSection";
import styled from "styled-components";

interface HeadshotsQuery {
  node: {
    publicURL: string;
    name: string;
  };
}

const useQueersHeadshotsByName = () => {
  const data: HeadshotsQuery[] = useStaticQuery(graphql`
    {
      headshots: allFile(
        filter: {
          relativePath: { regex: "queers/data/biodata/" }
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
    }
  `).headshots.edges;

  // Pivot them by name so we can attach them to the JSON
  const headshotsByName = data.reduce((acc, { node }) => {
    acc[node.name] = node;
    return acc;
  }, {} as { [name: string]: any });

  return headshotsByName;
};

const queersBiosJSON: IBioProps[] = require("../data/biodata/bios.json");

// Lazy load all the markdown bios
const LazyBiosByName = queersBiosJSON.reduce<{
  [name: string]: React.LazyExoticComponent<any>;
}>((acc, bio) => {
  if (bio.bio) {
    acc[bio.name] = React.lazy(() => import(`../data/biodata/${bio.bio}`));
  }
  return acc;
}, {});

interface QueersBiosProps {
  category: string;
}

const QueersBio = styled(Bio)`
  img {
    border-radius: 50%;
    image-rendering: crisp-edges;
    filter: grayscale(1);
  }
`;

const QueersBios = ({ category }: QueersBiosProps) => {
  // First query for the headshot image URLs
  const headshotsByName = useQueersHeadshotsByName();

  // Attach the URLs to the JSON
  const biosWithImages: IBioProps[] = queersBiosJSON
    .filter((bio) => bio.category == category)
    .map((bio) => ({
      ...bio,
      image: bio.image ? headshotsByName[bio.image] : undefined,
    }));

  return biosWithImages.map((bio) => {
    const BioMdx = LazyBiosByName[bio.name];
    return (
      <QueersSection key={bio.name}>
        <QueersBio {...bio} bio={BioMdx ? <BioMdx /> : undefined} />
      </QueersSection>
    );
  });
};

export default QueersBios;
