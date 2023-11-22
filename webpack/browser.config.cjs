const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	target: "web",
	mode: "production",
	devtool: "source-map",
	entry: "./index.ts",
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: [
					/node_modules/,
					/test/,
					/static/,
					/webpack/,
					/\.config\./,
					/\.test\./,
				]
			},
		],
	},
	resolve: {
		extensions: [ ".js", ".ts"]
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			extractComments: false,
		})],
	},
	output: {
		filename: "hs.min.js",
		library: {
      name: 'handyscript',
      type: 'window',
    },
		path: path.join(__dirname, "../", "dist"),
	},
};
