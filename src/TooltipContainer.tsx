import * as React from "react";

import "./TooltipContainer.less";
import {EColor} from "dyna-ui-styles";
import {EStyle} from "./DynaTooltip";
import {CSSProperties} from "react";

export interface ITooltipContainerProps {
	show: boolean;
	x: number;
	y: number;
	style?: EStyle;
	color?: EColor;
	children: any;
}

export class TooltipContainer extends React.Component<ITooltipContainerProps> {
	public render(): JSX.Element {
		const {
			show, x, y,
			style, color,
			children,
		} = this.props;

		const divStyle: CSSProperties = {
			top: y,
			left: x,
		};

		const className: string = [
			"dyna-tooltip-container",
			`dyna-tooltip-container--display-${show ? "SHOW" : "HIDE"}`,
			`dyna-tooltip-container--style-${style}`,
			`dyna-tooltip-container--color-${color || "NONE"}`,
		].join(' ').trim();

		return (
			<div className={className} style={divStyle}>{children}</div>
		);
	}
}