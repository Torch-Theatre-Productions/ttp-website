import * as React from "react";
import { IBioProps, default as Bio } from "./Bio";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

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

export const bioQuery = () => graphql`
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

export const pivotBiographyData = (data: AllBioData) => {
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
  configuration: IBioProps[];
  wrapper?: string | React.FC<any>;
  data: { headshotsByName: any; biosByName: any };
  render?: React.FCwC<IBioProps>;
}

const Biographies = ({
  wrapper,
  configuration,
  data,
  render,
}: BiographiesProps) => {
  const { biosByName, headshotsByName } = data;

  const Wrapper = wrapper || "div";
  const InnerBio = render || Bio;

  return (
    <Wrapper>
      {configuration.map((bio: IBioProps) => (
        <InnerBio
          key={bio.name}
          bio={<ReactMarkdown>{biosByName[bio.bio]}</ReactMarkdown>}
          image={headshotsByName[bio.image]}
          name={bio.name}
          role={bio.role}
          roleIn={bio.roleIn}
        />
      ))}
    </Wrapper>
  );
};

export default Biographies;
