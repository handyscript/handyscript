import path from "path";

export default {
	target: "node",
	mode: "production",
	devtool: "source-map",
	entry: "./index.ts",
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: ["/node_modules/", "/dist/", "/test/", "/jest.config.js"]
			},
		],
	},
	resolve: {
		extensions: [ ".js", ".ts"]
	},
	output: {
		filename: "hs.min.cjs",
		path: path.resolve(new URL(".", import.meta.url).pathname, "dist"),
	},
};