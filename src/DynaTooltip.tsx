import * as React from "react";
import * as ReactDOM from "react-dom";
import {EColor} from "dyna-ui-styles";

import {TooltipContainer} from "./tooltip-container/TooltipContainer";

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

export class DynaTooltip extends React.Component<IDynaTooltipProps> {
	static defaultProps: IDynaTooltipProps = {
		style: EStyle.ROUNDED,
		color: EColor.WHITE_BLACK,
		children: null,
		tooltipContent: null,
		tooltipDirection: ETooltipDirection.SOUTH_EAST,
		_debug_doNotHide: false,
	};

	private tooltipContainer: HTMLDivElement;
	private tooltipComponent: TooltipContainer;

	public componentWillMount(): void {
		this.tooltipContainer = document.createElement('div');
		document.querySelector('body').appendChild(this.tooltipContainer);
		ReactDOM.render(<TooltipContainer ref={this.initializeTooltipComponent.bind(this)}/>, this.tooltipContainer);
	}

	private initializeTooltipComponent(tooltipComponent:TooltipContainer):void{
		this.tooltipComponent=tooltipComponent;
		this.updateTooltipFromProps(this.props);
	}

	public componentWillUnmount():void{
		document.querySelector('body').removeChild(this.tooltipContainer);
	}

	public componentWillReceiveProps(nextProps:IDynaTooltipProps):void{
		this.updateTooltipFromProps(nextProps);
	}

	private updateTooltipFromProps(props:IDynaTooltipProps):void{
		const {style, color, tooltipContent, tooltipDirection} = props;
		this.tooltipComponent.update({
			style, color, content: tooltipContent, direction: tooltipDirection,
		});
	}

	private handleMouseEnter(): void {
		this.tooltipComponent.update({show: true});
	}

	private handleMouseLeave(): void {
		if (this.props._debug_doNotHide) return;
		this.tooltipComponent.update({show: false});
	}

	private handleMouseMove(event: MouseEvent): void {
		this.tooltipComponent.update({
			x: event.screenX,
			y: event.screenY,
		});
	}

	public render(): JSX.Element {
		const {
			children,
		} = this.props;

		return (
			<span
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
				onMouseMove={this.handleMouseMove.bind(this)}
			>{children}</span>
		);
	}
}
