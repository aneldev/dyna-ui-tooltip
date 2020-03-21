import * as React from "react";
import { EColor } from "dyna-ui-styles";
import { EStyle, ETooltipDirection } from "../DynaTooltip";
import "./TooltipContainer.less";
export interface ITooltipContainerProps {
}
export interface ITooltipContainerState {
    show?: boolean;
    x?: number;
    y?: number;
    direction?: ETooltipDirection;
    style?: EStyle;
    color?: EColor;
    content?: any;
    _domDisplay?: boolean;
}
export declare class TooltipContainer extends React.Component<ITooltipContainerProps, ITooltipContainerState> {
    constructor(props: ITooltipContainerProps);
    private domDisplayTimer;
    readonly show: boolean;
    update(state: ITooltipContainerState): void;
    private readonly hasContent;
    render(): JSX.Element;
}
