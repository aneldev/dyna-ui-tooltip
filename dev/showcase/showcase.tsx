import * as React from 'react';
import {DynaTooltip, EColor, EStyle, ETooltipDirection} from "../../src";

import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";
import {IShowcaseViewProps} from "dyna-showcase/dist/interfaces";

export default {
  logo: <Logo />,
  views: [
    {
	    slug: 'simple',
      faIconName: 'flask',
	    title: 'simple tooltip demo',
      center: true,
      component: (
        <DynaTooltip
	        tooltipContent="tooltip content"
        >Text with tooltip</DynaTooltip>
      ),
	    props: (() => {
		    const props: IShowcaseViewProps[] = [];
		    [EColor.WHITE_BLACK, EColor.ORANGE_WHITE].forEach((color: EColor) => {
			    Object.keys(EStyle).forEach((style: EStyle) => {
				    Object.keys(ETooltipDirection).forEach((direction: ETooltipDirection) => {
					    props.push({
						    slug: `color-${color}-style-${style}-direction-${direction}`,
						    title: `color:  ${color} style: ${style} ${direction}`.toLowerCase(),
						    props: {
							    color,
							    style,
							    tooltipDirection: direction,
						    }
					    });
				    });
			    });
		    });
		    return props;
	    })(),
      wrapperStyle:{
      },
    },
  ]
}as IShowcase;
