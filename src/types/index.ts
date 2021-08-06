import type { ColorModel } from "@ericrovell/blossom";

export type Variant = 
	| "neutral"
	| "primary"
	| "success"
	| "danger"
	| "warning"
	| "info"
	| "link";

export type AriaCurrent = 
	| "page"
	| "location"
	| "date"
	| "step";

export interface Transformation {
	model: ColorModel;
	value: string;
}

export type Transformations = Transformation[];

export interface Property {
	name: string;
	value: string | number;
}

export type Properties = Property[];