# About

React tooltip with default style, also you can style it from scratch.

This tooltip follows the mouse on move.

Written in typescript, runs everywhere.

# Props

```
interface IDynaTooltipProps {
	className?: string;
	nodeType?: string;          // default: span
	nodeStyle?: CSSProperties;
	style?: EStyle;             // null for NONE style for custom style
	color?: EColor;             // null for NONE color for custom color
	delayCreationMs?: number;
	enabled?: boolean;
	children: any;
	tooltipContent: any;
	tooltipDirection?: ETooltipDirection;
	_debug_doNotHide?: boolean; // set this to true to do not hide is and style it easier
}

enum EStyle {
	ROUNDED = "ROUNDED",
	FLATTED = "FLATTED",
}

enum EColor {
	BLACK_WHITE = "BLACK_WHITE",
	BLACK_ORANGE = "BLACK_ORANGE",
	TRANSPARENT_ORANGE = "TRANSPARENT_ORANGE",
	TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
	ORANGE_WHITE = "ORANGE_WHITE",
	RED_WHITE = "RED_WHITE",
	GREY_WHITE = "GREY_WHITE",
	WHITE_BLACK = "WHITE_BLACK",
	WHITE_RED = "WHITE_RED",
	WHITE_ORANGE = "WHITE_ORANGE",
}

enum ETooltipDirection {
	NORTH = "NORTH",
	EAST = "EAST",
	SOUTH = "SOUTH",
	WEST = "WEST",
	NORTH_EAST = "NORTH_EAST",
	NORTH_WEST = "NORTH_WEST",
	SOUTH_EAST = "SOUTH_EAST",
	SOUTH_WEST = "SOUTH_WEST",
}
```

# Demo

`npm start`
