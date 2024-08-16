exports.onCreateWebpackConfig = ({ actions }) => {
  return actions.setWebpackConfig({
    stats:{
      errorDetails: true
    },
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  });
};
