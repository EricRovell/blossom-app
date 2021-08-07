import type { Blossom } from "@core/blossom";
import type { Properties } from "@types";

export function getColorProperties(color: Blossom): Properties {
	return [
		{
			name: "Hue",
			value: color.hue
		},
		{
			name: "Saturation",
			value: color.saturation
		},
		{
			name: "Lightness",
			value: color.lightness
		},
		{
			name: "Brightness",
			value: color.brightness
		},
		{
			name: "Luminance",
			value: color.luminance
		}
	];
}