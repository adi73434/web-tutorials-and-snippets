import glob from "glob";
import fs from "fs";
import path from "path";



/**
 *
 *
 * @param {string} str
 * @return {*}  {string}
 */
const getFilenameFromPath = (str: string): string | undefined => {
	// See: https://stackoverflow.com/a/25221100/13310905
	// See: https://stackoverflow.com/a/25221100/13310905
	// See: https://stackoverflow.com/a/25221100/13310905
	// See: https://stackoverflow.com/a/25221100/13310905
	// See: https://stackoverflow.com/a/25221100/13310905
	const a = str.split("\\").pop();
	// This done here cause "object is possible undefined"
	return a !== undefined ? a.split("/").pop() : undefined;
};



/**
 * Get the folder name of a string of a path.
 *
 * Use folderOffset to specfiy how many folders "up" from the right-most folder
 * in the path string.
 *
 * By default gets the last folder in the path
 *
 * @param {string} str
 * @param {number} [folderOffset=1]
 * @return {*}  {string}
 */
const getFolderParentFromPath = (str: string, folderOffset = 1): string => {
	const split = str.split("/");

	return split[split.length - folderOffset];
};



/**
 *
 *
 * @param {string} str
 * @return {*}  {string}
 */
const removeFilenameFromPath = (str: string): string => {
	return str.substring(0, str.lastIndexOf("/"));
};



// wtf?: https://stackoverflow.com/a/45130990/13310905

/**
 * Read all files recursively
 *
 * @param {*} src
 * @param {*} callback
 */
const readFilesRecursivelyCb = (src: any, callback: any) => {
	glob(src + "/**/*", callback);
};



/**
 *
 *
 * @param {string} dir
 * @return {*}  {string[]}
 */
const readFilesRecursively = (dir: string): string[] => {
	const files: string[] = [];
	/**
	 *
	 *
	 * @param {string} dirRecurse
	 */
	const dirChecker = (dirRecurse: string ) => {
		fs.readdirSync(dirRecurse).forEach((file) => {
			const absolutePath = path.join(dirRecurse, file);
			if (fs.statSync(absolutePath).isDirectory()) return dirChecker(absolutePath);
			else return files.push(absolutePath);
		});
	};

	dirChecker(dir);

	return files;
};



// fs.readdir("./examples", (err, files) => {
// 	files.forEach((file) => {
// 		console.log(file);
// 	});
// });



const regFileExtension = /(?:\.([^.]+))?$/;


export {
	getFilenameFromPath,
	readFilesRecursively,
	readFilesRecursivelyCb,
	getFolderParentFromPath,
	removeFilenameFromPath,
	regFileExtension,
};
