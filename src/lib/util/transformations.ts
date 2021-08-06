import type { Blossom } from "@ericrovell/blossom";
import type { Transformations } from "@types";

export function getColorTransformations(color: Blossom): Transformations {
	return [
		{
			model: "hex",
			value: color.hex
		},
		{
			model: "rgb",
			value: color.toStringRGB
		},
		{
			model: "hsl",
			value: color.toStringHSL
		}
	];
}