import * as React from "react";
import {EColor} from "dyna-ui-styles";

import {TooltipContainer} from "./TooltipContainer";

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
	style?: EStyle;
	color?: EColor;
	children: any;
	tooltipContent: any;
	tooltipDirection?: ETooltipDirection;
	tooltipDistance?: number;
}

export interface IDynaTooltipState {
	show: boolean;
	x: number;
	y: number;
}

interface ICoordinates {
	x:number;
	y:number;
}

export class DynaTooltip extends React.Component<IDynaTooltipProps, IDynaTooltipState> {
	static defaultProps: IDynaTooltipProps = {
		style: EStyle.ROUNDED,
		color: EColor.WHITE_BLACK,
		children: null,
		tooltipContent: null,
		tooltipDirection: ETooltipDirection.SOUTH_EAST,
		tooltipDistance: 14,
	};

	constructor(props: IDynaTooltipProps) {
		super(props);
		this.state = {
			show: false,
			x: 0, y: 0,
		};
	}

	private calcDistance(direction: ETooltipDirection, currentX: number, currentY: number): ICoordinates {
		const {tooltipDistance} = this.props;
		switch (direction){
			case ETooltipDirection.NORTH: return {x: currentX, y: currentY-tooltipDistance};
			case ETooltipDirection.EAST: return {x: currentX+tooltipDistance, y : currentY};
			case ETooltipDirection.SOUTH: return {x: currentX, y: currentY+tooltipDistance};
			case ETooltipDirection.WEST: return {x: currentX-tooltipDistance, y: currentY};
			case ETooltipDirection.NORTH_EAST: return {x: currentX+tooltipDistance, y: currentY-tooltipDistance};
			case ETooltipDirection.NORTH_WEST: return {x: currentX-tooltipDistance, y: currentY-tooltipDistance};
			case ETooltipDirection.SOUTH_EAST: return {x: currentX+tooltipDistance, y: currentY+tooltipDistance};
			case ETooltipDirection.SOUTH_WEST: return {x: currentX-tooltipDistance, y: currentY+tooltipDistance};
		}
	}

	private handleMouseEnter(): void {
		this.setState({show: true});
	}

	private handleMouseLeave(): void {
		this.setState({show: false});
	}

	private handleMouseMove(event: MouseEvent): void {
		const {tooltipDirection} = this.props;
		const mouseX: number = event.clientX;
		const mouseY: number = event.clientY;
		this.setState({
			...this.calcDistance(tooltipDirection, mouseX, mouseY),
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
			`dyna-tooltip--direction-${tooltipDirection}`,
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
				>{tooltipContent}</TooltipContainer>
				</span>
		);
	}
}
