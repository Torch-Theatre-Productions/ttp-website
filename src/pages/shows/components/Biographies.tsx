import * as React from "react";
import { IBioProps, default as Bio } from "./Bio";
import { graphql, useStaticQuery } from "gatsby";

interface HeadshotsQuery {
  node: {
    publicURL: string;
    name: string;
  };
}

interface BioQuery {
  id: string;
  name: string;
  childMdx: {
    body: string;
  };
}

interface AllBioData {
  headshots: { edges: HeadshotsQuery[] };
  bioData: { nodes: BioQuery[] };
}

const getBiographyData = (): AllBioData => {
  return useStaticQuery(graphql`
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
          extension: { eq: "json" }
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
  `);
};

const pivotBiographyData = (data: AllBioData) => {
  const biosByName = data.bioData.nodes.reduce((acc, { name, childMdx }) => {
    acc[name] = childMdx.body;
    return acc;
  }, {} as { [name: string]: string });

  const headshotsByName = data.headshots.edges.reduce((acc, { node }) => {
    acc[node.name] = node;
    return acc;
  }, {} as { [name: string]: any });

  return { biosByName, headshotsByName };
};

interface BiographiesProps {
  configuration: any;
}

const Biographies = ({ configuration }: BiographiesProps) => {
  const { biosByName, headshotsByName } = pivotBiographyData(
    getBiographyData()
  );

  return (
    <div>
      {configuration.map((bio: IBioProps) => (
        <Bio
          key={bio.name}
          bio={biosByName[bio.name]}
          image={headshotsByName[bio.name]}
          {...bio}
        />
      ))}
    </div>
  );
};

export default Biographies;
