import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `t🔥rch.`,
    siteUrl: `https://torch-theatre-productions.github.io/ttp-website`,
  },
  pathPrefix: "/ttp-website",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-mdx-fix",
    //   options: {
    //     gatsbyRemarkPlugins: ["gatsby-remark-images"],
    //   },
    // },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: ["gatsby-remark-images"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
        ignore: [`**/\.*`, "shows/**/*"],
      },
      __key: "pages",
    },
  ],
};

export default config;
