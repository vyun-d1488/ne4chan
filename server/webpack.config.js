const webpack = require("webpack");
const path = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: "./src/routes/routes.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "routes.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
	},
};
