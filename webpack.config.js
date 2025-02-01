export default {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply babel-loader to JavaScript files only
        use: "babel-loader",
        exclude: /node_modules/, // Exclude node_modules for performance
      },
      {
        test: /\.(scss|css)$/, // Add support for CSS/SCSS if needed
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.json$/, // Ensure JSON files are handled correctly
        type: "json",
      },
    ],
  },
  watch: true, // Enable file watching for changes
  mode: "development", // Set development mode
  devtool: "source-map", // Enable source maps for debugging
};
