import path from "path";

// -----------------------------------------------------------------------------
// Dirname stuff
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// -----------------------------------------------------------------------------


// Haha. I'm very stubborn with using ESM, so here goes this mess
export default (env, argv) => {
	return {
	// resolve: {
	// 	alias: {
	// 		// "p1": path.resolve(__dirname, "./examples/proj1"),
	// 		// "p2": path.resolve(__dirname, "./examples/proj2"),
	// 		"./examplos/proj1": "./examples/proj1",
	// 		"./examplos/proj2": "./examples/proj2",
	// 	},
	// },
	// bundling mode
		mode: "production",

		// entry files
		entry: {
			app: [
				path.resolve(__dirname, "./examples/proj1/test.ts"),
				path.resolve(__dirname, "./examples/proj2/test2.ts"),
			],
		},

		// output bundles (location)
		output: {
			path: path.join(__dirname, "distMulti" ),
			filename: "main.js",
		},

		// file resolutions
		resolve: {
			extensions: [".ts", ".js"],
		},

		// loaders
		module: {
			rules: [
				{
					test: /\.tsx?/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
			],
		},
	};
};

// const fooConfig = Object.assign({}, defaultConfig, {
// 	name: "a",
// 	entry: "./examples/proj1",
// 	output: {
// 		path: path.resolve( __dirname, "examples/proj1/dist"),
// 		filename: "bundle.js",
// 	},
// });
// const barConfig = Object.assign({}, defaultConfig, {
// 	name: "b",
// 	entry: "./examples/proj2",
// 	output: {
// 		path: path.resolve( __dirname, "examples/proj2/dist"),
// 		filename: "bundle.js",
// 	},
// });

// export default (env, argv) => {
// 	const asdf = {};
// 	Object.assign(asdf, defaultConfig, {
// 		name: "a",
// 		entry: "./examples/proj1",
// 		output: {
// 			path: path.resolve( __dirname, "examples/proj1/dist"),
// 			filename: "bundle.js",
// 		},
// 	});
// 	return asdf;
// };


// export default {
// 	fooConfig, barConfig,
// };
