import * as React from "react";
import { EColor } from "dyna-ui-styles";
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
    enabled?: boolean;
    children: any;
    tooltipContent: any;
    tooltipDirection?: ETooltipDirection;
    _debug_doNotHide?: boolean;
}
export declare class DynaTooltip extends React.Component<IDynaTooltipProps> {
    static defaultProps: IDynaTooltipProps;
    constructor(props: IDynaTooltipProps);
    private tooltipContainer;
    private tooltipComponent;
    componentWillMount(): void;
    private initializeTooltipComponent(tooltipComponent);
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: IDynaTooltipProps): void;
    private handleGlobalScroll(event);
    private updateTooltipFromProps(props);
    private handleMouseEnter();
    private handleMouseLeave();
    private handleMouseMove(event);
    render(): JSX.Element;
}
