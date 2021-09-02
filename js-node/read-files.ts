import glob from "glob";

/**
 * Read all files recursively
 *
 * @param {*} src
 * @param {*} callback
 */
const readFilesRecursively = (src: any, callback: any) => {
	glob(src + "/**/*", callback);
};

// readFilesRecursively("test", (err: any, res: any) => {
// 	if (err) {
// 		console.log("Error", err);
// 	}
// 	else {
// 		console.log(res);
// 	}
// });

// fs.readdir("./examples", (err, files) => {
// 	files.forEach((file) => {
// 		console.log(file);
// 	});
// });

export {
	readFilesRecursively,
};
