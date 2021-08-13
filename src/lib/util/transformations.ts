import type { Blossom } from "@core/blossom";
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
		},
		{
			model: "hsv",
			value: color.toStringHSV
		},
		{
			model: "cmyk",
			value: color.toStringCMYK
		},
		{
			model: "xyz",
			value: color.toStringXYZ
		},
		{
			model: "lab",
			value: color.toStringLAB
		},
		{
			model: "lch",
			value: color.toStringLCH
		},
		{
			model: "hwb",
			value: color.toStringHWB
		},
	];
}