import * as React from "react";
import { CSSProperties } from "react";
import { EColor, EStyle, ETooltipDirection } from "./interfaces";
export interface IDynaTooltipProps {
    className?: string;
    nodeType?: string;
    nodeStyle?: CSSProperties;
    style?: EStyle;
    color?: EColor;
    delayCreationMs?: number;
    enabled?: boolean;
    children: any;
    tooltipContent: any;
    tooltipDirection?: ETooltipDirection;
    _debug_doNotHide?: boolean;
}
export declare class DynaTooltip extends React.Component<IDynaTooltipProps> {
    static defaultProps: IDynaTooltipProps;
    constructor(props: IDynaTooltipProps);
    refs: {
        container: HTMLElement;
    };
    private tooltipContainer;
    private tooltipComponent;
    private didUnmount;
    componentWillMount(): void;
    private initializeTooltipComponent;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: IDynaTooltipProps): void;
    private handleGlobalScroll;
    private handleGlobalMouseMove;
    private updateTooltipFromProps;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleMouseMove;
    render(): JSX.Element;
}
