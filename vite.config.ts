import {defineConfig} from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
	plugins: [solidPlugin()],
	root: "playground-client/",
	build: {
		// rollupOptions: {
		// 	input: {
		// 		main: path.resolve(__dirname, "meta-client/src/index.html"),
		// 	},
		// },
		target: "esnext",
		polyfillDynamicImport: false,
	},
});
