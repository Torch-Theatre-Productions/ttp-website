exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage == "build-html") {
    actions.setWebpackConfig({
      stats: {
        errorDetails: true,
      },
      resolve: {
        fallback: {
          path: require.resolve("path-browserify"),
          process: require.resolve("process/browser"),
          url: require.resolve("url/"),
        },
      },
    });
  }
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  console.log(`Created page ${page.path}`);
  if (page.path.match(RegExp(`^/shows/${page.path.split("/")[2]}/$`))) {
    console.log(`Adding context for page ${page.path}`);
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        showId: page.path.split("/")[2],
        biosDataPath: `/shows/${page.path.split("/")[2]}/data/bios/`,
      },
    });
  }
};
