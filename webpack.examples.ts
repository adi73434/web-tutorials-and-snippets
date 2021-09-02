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

type projects = {
	data: projectInfo[],
	allEntries: projectEntry,
}

type projectInfo = {
	path: string,
	file: string,
	pathToLastFolder: string,
}

type projectEntry = {
	// The key is not known as it will match the folder name
	[key: string]: string,
}



/**
 * Get the project data of all the projects within ./examples/ directory, with index.ts/index.js
 * acting as the entrypoint.
 *
 * @return {*}  {Promise<any>}
 */
const getProjectsData = (): projects => {
	const exampleProjects: projects = {
		// data holds the general project info
		data: [],
		// allEntries holds the entries as they shall be given to webpack
		allEntries: {},
	};

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

		// Ignore existing build folders otherwise you'd be building built files
		if (secondToLastFolderName === "build") {
			return;
		}

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
		}
		// Check it's an index.js/ts
		else if (fileName === "index.ts" || fileName === "index.js") {
			exampleProjects.data.push(
				{
					path: fullPath,
					file: fileName,
					pathToLastFolder: "asdf",
				},
			);
			exampleProjects.allEntries[pathWithoutFilename] = "./" + fullPath;
		}
	});
	return exampleProjects;
};



// -----------------------------------------------------------------------------
// Check these
// https://stackoverflow.com/a/38132106/13310905
// https://stackoverflow.com/a/43689505/13310905
// -----------------------------------------------------------------------------
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
