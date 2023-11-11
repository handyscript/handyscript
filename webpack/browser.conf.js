import path from "path";

export default {
	target: "web",
	mode: "production",
	devtool: "source-map",
	entry: "./index.ts",
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [ ".js", ".ts"]
	},
	output: {
		filename: "hs.min.js",
		path: path.resolve(new URL(".", import.meta.url).pathname, "dist"),
	},
};