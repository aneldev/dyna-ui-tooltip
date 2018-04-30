import * as React from "react";
import {CSSProperties} from "react";
import {EColor} from "dyna-ui-styles";

import {EStyle, ETooltipDirection} from "../DynaTooltip";

import "./TooltipContainer.less";
import {clearTimeout} from "timers";

const animationDuration: number = 250; // same value 240852049

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

export class TooltipContainer extends React.Component<ITooltipContainerProps, ITooltipContainerState> {
	constructor(props: ITooltipContainerProps) {
		super(props);
		this.state = {
			show: false,
			x: 0, y: 0,
			direction: ETooltipDirection.SOUTH_EAST,
			style: EStyle.ROUNDED,
			color: EColor.WHITE_BLACK,
			content: null,
			_domDisplay: false,
		};
	}

	private domDisplayTimer: any;

	public update(state: ITooltipContainerState): void {
		state = {...state};
		const turnsToShow: boolean = this.state.show === false && state.show === true;
		const turnsToHide: boolean = this.state.show === true && state.show === false;

		if (turnsToShow) {
			clearTimeout(this.domDisplayTimer);
			state._domDisplay = true;
			state.show = false;
			setTimeout(() => {
				this.setState({show: true});
			}, 10);
		}

		this.setState(state);

		if (turnsToHide) {
			this.domDisplayTimer = setTimeout(() => {
				this.setState({_domDisplay: false})
			}, animationDuration);
		}
	}

	public render(): JSX.Element {
		const {
			show, x, y, direction,
			style, color,
			content,
			_domDisplay,
		} = this.state;

		if (!_domDisplay) return null;

		const divStyle: CSSProperties = {
			top: y,
			left: x,
		};

		const className: string = [
			"dyna-tooltip-container",
			`dyna-tooltip-container--direction-${direction}`,
			`dyna-tooltip-container--display-${show ? "SHOW" : "HIDE"}`,
			`dyna-tooltip-container--style-${style || "NONE"}`,
			`dyna-tooltip-container--color-${color || "NONE"}`,
		].join(' ').trim();

		return (
			<div className={className} style={divStyle}>{content}</div>
		);
	}
}