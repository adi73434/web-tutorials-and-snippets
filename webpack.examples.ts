import path from "path";
import fs from "fs";
import webpack from "webpack";

// -----------------------------------------------------------------------------
// Dirname stuff
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// -----------------------------------------------------------------------------

import {readFilesRecursively, getFilenameFromPath, getFolderParentFromPath, removeFilenameFromPath} from "./js-node/files";


// type projects = {
// 	// data holds the general project info
// 	data: Array<projectInfo>,
// 	// allEntries holds the entries as they shall be given to webpack
// 	allEntries: Array<projectEntry>
// }

type projectInfo = {
	path: string,
	file: string,
	pathToLastFolder: string,
}

type projectEntry = {
	// The key is not known as it will match the folder name
	[key: string]: string,
}

type projects = {
	data: projectInfo[],
	allEntries: projectEntry,
}

const exampleProjects: projects = {
	// data holds the general project info
	data: [],
	// allEntries holds the entries as they shall be given to webpack
	allEntries: {},
};



/**
 *
 *
 * @return {*}  {Promise<any>}
 */
const getProjectsData = (): projects => {
	const allPaths = readFilesRecursively("./examples/");

	// Filter out all paths and make allEntries hold the key->string pair
	// where the key is the name of the folder containing the index.ts/index.js file
	allPaths.forEach((fullPath) => {
		const fileName = getFilenameFromPath(fullPath);
		if (fileName === undefined) {
			return;
		}

		// Get file extension (currently unnecessary)
		// const fileExtTemp = regFileExtension.exec(fileName);
		// if (fileExtTemp === null) {
		// 	return;
		// }
		// const fileExt = fileExtTemp[1];

		const pathWithoutFilename = removeFilenameFromPath(fullPath);
		const secondToLastFolderName = getFolderParentFromPath(pathWithoutFilename, 1);

		// Compile all files within the root of the examples folder
		if (pathWithoutFilename === "./examples/") {
			exampleProjects.data.push(
				{
					path: fullPath,
					file: fileName,
					pathToLastFolder: "asdf",
				},
			);
			exampleProjects.allEntries[pathWithoutFilename] = "./" + fullPath;
			// exampleProjects.allEntries.push({
			// [fileName]: fullPath,
			// });
		}
		// Check it's an index.js/ts
		else if (fileName === "index.ts" || fileName === "index.js") {
		// return getFilenameFromPath(fullPath);
		// return filename;
			exampleProjects.data.push(
				{
					path: fullPath,
					file: fileName,
					pathToLastFolder: "asdf",
				},
			);
			exampleProjects.allEntries[pathWithoutFilename] = "./" + fullPath;
			// exampleProjects.allEntries.push({
			// [secondToLastFolderName]: fullPath,
			// });"distMulti"
		}
	});

	// console.log(exampleProjects);

	// entrypoints = exampleProjects.allEntries;
	// callbackEntrypoints(exampleProjects.allEntries);
	// const allEntriesObj = Object.assign({}, exampleProjects.allEntries);
	return exampleProjects;
};

// Haha. I'm very stubborn with using ESM, so here goes this mess


export default (env: any, argv: any): webpack.Configuration => {
	const exampleProjects = getProjectsData();

	return {
		// bundling mode
		mode: "production",

		// entry files
		entry: () => {
			console.log(exampleProjects.allEntries);
			return exampleProjects.allEntries;
		},

		// output bundles (location)
		output: {
			path: path.resolve(__dirname),
			filename: "[name]/build/index.js",
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
// export default config;

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
