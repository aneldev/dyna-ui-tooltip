import * as React from "react";

import "./TooltipContainer.less";
import {EColor} from "dyna-ui-styles";
import {EStyle, ETooltipDirection} from "../DynaTooltip";
import {CSSProperties} from "react";

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

export class TooltipContainer extends React.Component<ITooltipContainerProps, ITooltipContainerState> {
	constructor(props: ITooltipContainerProps) {
		super(props);
		this.state = {
			show: false,
			x: 0, y: 0,
			tooltipDirection: ETooltipDirection.SOUTH_EAST,
			style: EStyle.ROUNDED,
			color: EColor.WHITE_BLACK,
			content: null,
		};
	}

	public update(state: ITooltipContainerState): void {
		console.debug('update...', state);
		this.setState(state);
	}

	public render(): JSX.Element {
		const {
			show, x, y, tooltipDirection,
			style, color,
			content,
		} = this.state;

		const divStyle: CSSProperties = {
			top: y,
			left: x,
		};

		const className: string = [
			"dyna-tooltip-container",
			`dyna-tooltip-container--direction-${tooltipDirection}`,
			`dyna-tooltip-container--display-${show ? "SHOW" : "HIDE"}`,
			`dyna-tooltip-container--style-${style || "NONE"}`,
			`dyna-tooltip-container--color-${color || "NONE"}`,
		].join(' ').trim();

		return (
			<div className={className} style={divStyle}>{content}</div>
		);
	}
}