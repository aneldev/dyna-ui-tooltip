import * as React from "react";
import * as ReactDOM from "react-dom";
import {EColor} from "dyna-ui-styles";
import {dynaDebounce} from "dyna-debounce";

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
	delayCreationMs?: number;
	enabled?: boolean;
	children: any;
	tooltipContent: any;
	tooltipDirection?: ETooltipDirection;
	_debug_doNotHide?: boolean; // set this to true to do not hide is and style it easier
}

export class DynaTooltip extends React.Component<IDynaTooltipProps> {
	static defaultProps: IDynaTooltipProps = {
		style: EStyle.ROUNDED,
		color: EColor.WHITE_BLACK,
		enabled: true,
		children: null,
		delayCreationMs: 500,
		tooltipContent: null,
		tooltipDirection: ETooltipDirection.SOUTH_EAST,
		_debug_doNotHide: false,
	};

	constructor(props: IDynaTooltipProps) {
		super(props);
		this.handleGlobalScroll = dynaDebounce(this.handleGlobalScroll.bind(this), 500);
		this.handleGlobalMouseMove = dynaDebounce(this.handleGlobalMouseMove.bind(this), 500);
		console.debug('tooltip version v3.2');
	}

	public refs: {
		container: HTMLElement;
	};

	private tooltipContainer: HTMLDivElement;
	private tooltipComponent: TooltipContainer;
	private didUnmount: boolean = false;

	public componentWillMount(): void {
		setTimeout(() => {
			if (this.didUnmount) return; // exit, in unmount, no need to create it
			this.tooltipContainer = document.createElement('div');
			document.querySelector('body').appendChild(this.tooltipContainer);
			ReactDOM.render(<TooltipContainer ref={this.initializeTooltipComponent.bind(this)}/>, this.tooltipContainer);
			window.addEventListener('scroll', this.handleGlobalScroll, true);
			window.addEventListener('mousemove', this.handleGlobalMouseMove, true);
		}, this.props.delayCreationMs);
	}

	private initializeTooltipComponent(tooltipComponent: TooltipContainer): void {
		this.tooltipComponent = tooltipComponent;
		this.updateTooltipFromProps(this.props);
	}

	public componentWillUnmount(): void {
		this.didUnmount = true;
		if (this.tooltipContainer) {
			document.querySelector('body').removeChild(this.tooltipContainer);
			window.removeEventListener('scroll', this.handleGlobalScroll);
			window.removeEventListener('mousemove', this.handleGlobalMouseMove);
		}
	}

	public componentWillReceiveProps(nextProps: IDynaTooltipProps): void {
		this.updateTooltipFromProps(nextProps);
	}

	private handleGlobalScroll(event: Event): void {
		if (this.tooltipComponent) this.tooltipComponent.update({show: false});
	}

	private handleGlobalMouseMove(event: MouseEvent): void {
		if (!this.tooltipComponent) return;
		if (!this.tooltipComponent.show) return;
		if (!this.refs.container) return;

		if (!(event.target===this.refs.container || this.refs.container.contains(event.target as Node))){
			this.tooltipComponent.update({show: false});
		}
	}

	private updateTooltipFromProps(props: IDynaTooltipProps): void {
		if (!this.tooltipComponent) return; // is not yet rendered
		const {style, color, tooltipContent, tooltipDirection} = props;
		this.tooltipComponent.update({
			style, color, content: tooltipContent, direction: tooltipDirection,
		});
	}

	private handleMouseEnter(): void {
		if (this.props.enabled) {
			this.tooltipComponent.update({show: true});
		}
	}

	private handleMouseLeave(): void {
		if (this.props._debug_doNotHide) return;
		this.tooltipComponent.update({show: false});
	}

	private handleMouseMove(event: MouseEvent): void {
		this.tooltipComponent.update({
			x: event.clientX,
			y: event.clientY,
		});
	}

	public render(): JSX.Element {
		const {
			children,
		} = this.props;

		return (
			<span
				ref="container"
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
				onMouseMove={this.handleMouseMove.bind(this)}
			>{children}</span>
		);
	}
}
