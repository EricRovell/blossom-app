import { extend } from "@ericrovell/blossom";
import { pluginA11Y } from "@ericrovell/blossom/plugins/a11y";
import { pluginXYZ } from "@ericrovell/blossom/plugins/xyz";
import { pluginLAB } from "@ericrovell/blossom/plugins/lab";
import { pluginLCH } from "@ericrovell/blossom/plugins/lch";
import { pluginHWB } from "@ericrovell/blossom/plugins/hwb";

extend([
	pluginA11Y,
	pluginXYZ,
	pluginLAB,
	pluginLCH,
	pluginHWB
]);

export * from "@ericrovell/blossom";