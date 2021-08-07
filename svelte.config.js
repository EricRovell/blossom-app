import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import path from "path";

const aliasList = [
	{ name: "@lib", path: "./src/lib" },
	{ name: "@core", path: "./src/core" },
	{ name: "@components", path: "./src/lib/components" },
	{ name: "@views", path: "./src/lib/views" },
	{ name: "@styles", path: "./src/styles" },
	{ name: "@types", path: "./src/types" },
	{ name: "@util", path: "./src/lib/util" }
];

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [
		sveltePreprocess({
			defaults: {
				script: "ts"
			}
		}),
		mdsvex({
			extensions: [ ".svelte", ".svx", ".md" ]
		})
	],
	extensions: [ ".svelte", ".svx", ".md" ],
	kit: {
		adapter: adapter(),
		target: "body",
		vite: {
			resolve: {
				alias: Object.fromEntries(aliasList.map(alias => (
					[ alias.name, path.resolve(alias.path) ]
				)))
			}
		},
		path: "/blossom-web"
	}
};