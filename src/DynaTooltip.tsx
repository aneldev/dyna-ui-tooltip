import * as React from "react";
import {EColor} from "dyna-ui-styles";

import {TooltipContainer} from "./tooltip-container/TooltipContainer";

import "./DynaTooltip.less";

export enum EStyle {
	ROUNDED = "ROUNDED",
	FLATTED = "FLATTED",
}

export {EColor}

export enum ETooltipDirection {
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
	style?: EStyle; // null for NONE style for custom style
	color?: EColor; // null for NONE color for custom color
	children: any;
	tooltipContent: any;
	tooltipDirection?: ETooltipDirection;
	_debug_doNotHide?: boolean; // set this to true to do not hide is and style it easier
}

export interface IDynaTooltipState {
	show: boolean;
	x: number;
	y: number;
}

export class DynaTooltip extends React.Component<IDynaTooltipProps, IDynaTooltipState> {
	static defaultProps: IDynaTooltipProps = {
		style: EStyle.ROUNDED,
		color: EColor.WHITE_BLACK,
		children: null,
		tooltipContent: null,
		tooltipDirection: ETooltipDirection.SOUTH_EAST,
		_debug_doNotHide: false,
	};

	constructor(props: IDynaTooltipProps) {
		super(props);
		this.state = {
			show: false,
			x: 0, y: 0,
		};
	}

	private handleMouseEnter(): void {
		this.setState({show: true});
	}

	private handleMouseLeave(): void {
		if (this.props._debug_doNotHide) return;
		this.setState({show: false});
	}

	private handleMouseMove(event: MouseEvent): void {
		this.setState({
			x: event.screenX,
			y: event.screenY,
		})
	}

	public render(): JSX.Element {
		const {
			style, color,
			tooltipContent,
			tooltipDirection,
			children,
		} = this.props;

		const {
			show, x, y,
		} = this.state;

		const className: string = [
			'dyna-tooltip',
		].join(' ').trim();

		return (
			<span
				className={className}
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
				onMouseMove={this.handleMouseMove.bind(this)}
			>
				{children}
				<TooltipContainer
					show={show}
					style={style}
					color={color}
					x={x}
					y={y}
					tooltipDirection={tooltipDirection}
				>{tooltipContent}</TooltipContainer>
				</span>
		);
	}
}
