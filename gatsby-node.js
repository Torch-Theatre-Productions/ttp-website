exports.onCreateWebpackConfig = ({ actions }) => {
  return actions.setWebpackConfig({
    stats: {
      errorDetails: true,
    },
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (
    page.path.includes("/shows/") &&
    page.path.match(RegExp(`^/shows/${page.path.split("/")[2]}/$`))
  ) {
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
