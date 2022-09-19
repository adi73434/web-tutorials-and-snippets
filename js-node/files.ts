import glob from "glob";
import fs from "fs";
import path from "path";



/**
 * Get the filename from a string matching either Linux or Windows
 * directory paths.
 *
 * @todo Make this take an override for path separator; the string provided may not
 * necessarily match the type of the host system.
 * @param {string} str
 * @return {string | undefined}
 */
const getFilenameFromPath = (str: string): string | undefined => {
	// -------------------------------------------------------------------------
	// TODO:
	// See: https://stackoverflow.com/a/25221100/13310905
	// See: https://stackoverflow.com/a/25221100/13310905
	// See: https://stackoverflow.com/a/25221100/13310905
	// See: https://stackoverflow.com/a/25221100/13310905
	// See: https://stackoverflow.com/a/25221100/13310905
	// -------------------------------------------------------------------------
	const a = str.split(path.sep).pop();
	// This done here cause "object is possible undefined"
	return a !== undefined ? a.split(path.sep).pop() : undefined;
};



/**
 * Get the folder name of a string of a path.
 *
 * Use folderOffset to specfiy how many folders "up" from the right-most folder
 * in the path string.
 *
 * By default gets the last folder in the path
 *
 * @todo Make this take an override for path separator; the string provided may not
 * necessarily match the type of the host system.
 * @param {string} str
 * @param {number} [folderOffset=1]
 * @return {string}
 */
const getFolderParentFromPath = (str: string, folderOffset = 1): string => {
	const split = str.split(path.sep);

	return split[split.length - folderOffset];
};



/**
 * Remove the filename from the provided path, either with Linux or Windows path
 * syntax (based on current platform.
 *
 * @todo Make this take an override for path separator; the string provided may not
 * necessarily match the type of the host system.
 * @param {string} str
 * @return {string}
 */
const removeFilenameFromPath = (str: string): string => {
	// See: https://stackoverflow.com/a/31848508
	return str.substring(0, str.lastIndexOf(path.sep));
};



// wtf?: https://stackoverflow.com/a/45130990/13310905

/**
 * Read all files recursively
 *
 * @todo Make this take an override for path separator; the string provided may not
 * necessarily match the type of the host system.
 * @param {any} src
 * @param {any} callback
 */
const readFilesRecursivelyCb = (src: any, callback: any) => {
	// Equivalent of src + "/**/*"" on Linux
	glob(`${src} + ${path.sep}**${path.sep}*`, callback);
};



/**
 * Read all files recursively in the provided directory and return
 * an array of the full paths.
 *
 * @param {string} dir
 * @return {string[]}
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



// FIXME: This might need to be made universal accross Windows/Linux,
// as I had to do with the other file stuff.
// See: path.sep
// See: https://stackoverflow.com/a/31848508
const regFileExtension = /(?:\.([^.]+))?$/;



export {
	getFilenameFromPath,
	readFilesRecursively,
	readFilesRecursivelyCb,
	getFolderParentFromPath,
	removeFilenameFromPath,
	regFileExtension,
};
