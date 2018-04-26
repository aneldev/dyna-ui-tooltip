import * as React from "react";
import "./TooltipContainer.less";
import { EColor } from "dyna-ui-styles";
import { EStyle, ETooltipDirection } from "../DynaTooltip";
export interface ITooltipContainerProps {
}
export interface ITooltipContainerState {
    show?: boolean;
    x?: number;
    y?: number;
    tooltipDirection?: ETooltipDirection;
    style?: EStyle;
    color?: EColor;
    content?: any;
}
export declare class TooltipContainer extends React.Component<ITooltipContainerProps, ITooltipContainerState> {
    constructor(props: ITooltipContainerProps);
    update(state: ITooltipContainerState): void;
    render(): JSX.Element;
}
