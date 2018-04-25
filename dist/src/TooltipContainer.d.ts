import * as React from "react";
import "./TooltipContainer.less";
import { EColor } from "dyna-ui-styles";
import { EStyle } from "./DynaTooltip";
export interface ITooltipContainerProps {
    show: boolean;
    x: number;
    y: number;
    style?: EStyle;
    color?: EColor;
    children: any;
}
export declare class TooltipContainer extends React.Component<ITooltipContainerProps> {
    render(): JSX.Element;
}
