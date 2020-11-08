import * as React from "react";
import {CSSProperties} from "react";
import {EColor} from "dyna-ui-styles";

import {EStyle, ETooltipDirection} from "../interfaces";

import "./TooltipContainer.less";

const animationDuration: number = 250; // same value 240852049

export interface ITooltipContainerProps {
}

export interface ITooltipContainerState {
  show: boolean;
  x: number;
  y: number;
  direction: ETooltipDirection;
  style: EStyle;
  color: EColor;
  content: any;
  _domDisplay: boolean;
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

  private domDisplayTimer: any = null;

  public get show(): boolean {
    return this.state.show;
  }

  public update(state: Partial<ITooltipContainerState>): void {
    const newState: ITooltipContainerState = {...state} as any;
    const turnsToShow: boolean = this.state.show === false && newState.show === true;
    const turnsToHide: boolean = this.state.show === true && newState.show === false;

    if (turnsToShow) {
      if (this.domDisplayTimer !== null) clearTimeout(this.domDisplayTimer);
      this.domDisplayTimer = null;
      newState._domDisplay = true;
      newState.show = false;
      setTimeout(() => {
        this.setState({show: true});
      }, 10);
    }

    this.setState(newState);

    if (turnsToHide) {
      this.domDisplayTimer = setTimeout(() => {
        this.domDisplayTimer = null;
        this.setState({_domDisplay: false});
      }, animationDuration);
    }
  }

  private get hasContent(): boolean {
    const {content} = this.state;
    if (Array.isArray(content))
      return !!content.filter((v: any) => !!v).length;
    else
      return !!content;
  }

  public render(): JSX.Element | null{
    const {
      show, x, y, direction,
      style, color,
      content,
      _domDisplay,
    } = this.state;

    if (!this.hasContent) return null;

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
