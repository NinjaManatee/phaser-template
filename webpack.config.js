const path = require("path");

module.exports = {
	entry: "./src/entry.ts",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist/js"),
		publicPath: "/js/"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist")
	}
};