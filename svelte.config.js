import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import path from "path";
import cssModules from "svelte-preprocess-cssmodules";

const aliasList = [
	{ name: "@ui", path: "./src/lib/ui" },
	{ name: "@components", path: "./src/lib/components" },
	{ name: "@styles", path: "./src/styles" },
	{ name: "@types", path: "./src/types" },
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		mdsvex(),
		cssModules(),
		sveltePreprocess(),
	],
	extensions: [ ".svelte", ".svx" ],
	kit: {
		adapter: adapter(),
		target: "body",
		vite: {
			resolve: {
				alias: Object.fromEntries(aliasList.map(alias => (
					[ alias.name, path.resolve(alias.path) ]
				)))
			}
		}
	}
};

export default config;