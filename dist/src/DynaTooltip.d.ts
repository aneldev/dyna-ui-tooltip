import * as React from "react";
import { EColor } from "dyna-ui-styles";
import "./DynaTooltip.less";
export declare enum EStyle {
    ROUNDED = "ROUNDED",
    FLATTED = "FLATTED",
}
export { EColor };
export declare enum ETooltipDirection {
    NORTH = "NORTH",
    EAST = "EAST",
    SOUTH = "SOUTH",
    WEST = "WEST",
    NORTH_EAST = "NORTH_EAST",
    NORTH_WEST = "NORTH_WEST",
    SOUTH_EAST = "SOUTH_EAST",
    SOUTH_WEST = "SOUTH_WEST",
}
export interface IDynaTooltipProps {
    style?: EStyle;
    color?: EColor;
    children: any;
    tooltipContent: any;
    tooltipDirection?: ETooltipDirection;
    tooltipDistance?: number;
    _debug_doNotHide?: boolean;
}
export interface IDynaTooltipState {
    show: boolean;
    x: number;
    y: number;
}
export declare class DynaTooltip extends React.Component<IDynaTooltipProps, IDynaTooltipState> {
    static defaultProps: IDynaTooltipProps;
    constructor(props: IDynaTooltipProps);
    private calcDistance(direction, currentX, currentY);
    private handleMouseEnter();
    private handleMouseLeave();
    private handleMouseMove(event);
    render(): JSX.Element;
}
