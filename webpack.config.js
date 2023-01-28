const path = require("path");
/* PLUGIN Y MINIFICADORES DE CSS Y SCSS/SASS */
/* Para reducir el tamaño de hojas del estilo de nuestro proyecto */
const HtmlWebPackPlugin = require("html-webpack-plugin"); // Para el template de HTML va a usar webcam
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Para reducir el CSS
const { SourceMapDevToolPlugin } = require("webpack");
// eslint-disable-next-line import/no-extraneous-dependencies
const ESLintPlugin = require("eslint-webpack-plugin");

// Configuraciones de puerto
const port = process.env.PORT || 3000;

const myEslintOptions = {
  extensions: ["js", "jsx", "ts"],
  exclude: ["node_modules"],
};

// Exportar configuracion de webpack
module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[hash].js",
    publicPath: "/",
  },

  context: path.resolve(__dirname),
  devServer: {
    port,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",

  module: {
    rules: [
      // Reglas para archivos JJS y jsx
      // Tienen que pasar el LINTING para poder pasar

      // Reglas para archivos JS y JSX
      // Reglas para babel ES  y JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      // Reglas para archivos CSS, SCSS y SASS para modificarlo y cargarlo en bucle
      {
        test: /(\.css|\.scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
      // Reglas para los archivos de imágenes
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new ESLintPlugin(myEslintOptions),
    // Template HTML
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/styles.css",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
    modules: ["node_modules"],
    alias: {
      "react-redux": path.join(
        __dirname,
        "/node_modules/react-redux/dist/react-redux.min"
      ),
    },
  },
};
