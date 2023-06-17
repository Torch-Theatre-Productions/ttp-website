exports.onCreateWebpackConfig = ({ actions }) => {
  return actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  });
};
