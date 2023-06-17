import * as React from "react";
import * as path from "path";
import { IBioProps, default as Bio } from "../../components/Bio";
import { graphql, useStaticQuery } from "gatsby";

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
            publicURL
            name
          }
        }
      }
    }
  `).headshots.edges;

  // Pivot them by name so we can attach them to the JSON
  const headshotsByName = data.reduce((acc, { node: { name, publicURL } }) => {
    acc[name] = publicURL;
    return acc;
  }, {} as { [name: string]: string });

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

const QueersBios = () => {
  // First query for the headshot image URLs
  const headshotsByName = useQueersHeadshotsByName();

  // Attach the URLs to the JSON
  const biosWithImages: IBioProps[] = queersBiosJSON.map((bio) => ({
    ...bio,
    image: bio.image ? headshotsByName[bio.image] : undefined,
  }));

  return biosWithImages.map((bio) => {
    const BioMdx = LazyBiosByName[bio.name];
    return (
      <Bio {...bio} bio={BioMdx ? <BioMdx /> : undefined} key={bio.name} />
    );
  });
};

export default QueersBios;
