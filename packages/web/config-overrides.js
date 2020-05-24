module.exports = function override(config, env) {
  config.module.rules.push(
    {
      test: /\.tsx$/,
      exclude: /node_modules[/\\](?!react-native-vector-icons|react-native-safe-area-view)/,
      use: {
        loader: "babel-loader",
        options: {
          // Disable reading babel configuration
          babelrc: false,
          configFile: false,

          // The configuration for compilation
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage" }],
            "@babel/preset-react",
            "@babel/preset-flow",
            "@babel/preset-typescript",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread",
          ],
        },
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules[/\\](?!react-native-vector-icons|react-native-safe-area-view)/,
      use: {
        loader: "babel-loader",
        options: {
          // Disable reading babel configuration
          babelrc: false,
          configFile: false,

          // The configuration for compilation
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage" }],
            "@babel/preset-react",
            "@babel/preset-flow",
            "@babel/preset-typescript",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread",
          ],
        },
      },
    }
  );

  return config;
};
