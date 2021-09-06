import TypeDoc from "typedoc";



/**
 *
 *
 */
async function main() {
	const app = new TypeDoc.Application();



	// If you want TypeDoc to load tsconfig.json / typedoc.json files

	app.options.addReader(new TypeDoc.TSConfigReader());

	app.options.addReader(new TypeDoc.TypeDocReader());


	app.bootstrap({

		// typedoc options here

		// entryPoints: ["js-node/entry.ts"],
		// tsconfig: "tsconfig.json",
		// exclude: ["./comparisons"],
		// packages: ["./meta-server/server.ts"],
		// emit: true,
	});



	const project = app.convert();



	if (project) {
		// Project may not have converted correctly

		const outputDir = "docs";



		// Rendered docs

		await app.generateDocs(project, outputDir);

		// Alternatively generate JSON output

		await app.generateJson(project, outputDir + "/documentation.json");
	}
}



main().catch(console.error);
