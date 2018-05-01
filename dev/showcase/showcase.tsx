import * as React from 'react';
import {DynaTooltip, EColor, EStyle, ETooltipDirection, IDynaTooltipProps} from "../../src";

import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";
import {IShowcaseViewProps} from "dyna-showcase/dist/interfaces";

export default {
  logo: <Logo />,
  views: [
    {
	    slug: 'in-list',
      faIconName: 'flask',
	    title: 'in listed items',
      center: false,
	    component: (
		    <div>
			    {Array(100).fill(null).map((v: any, index: number) => (
				    <div style={{margin: "40px 0", padding: "40px"}} key={index}>
					    <DynaTooltip
						    tooltipContent={`Tooltip content #${index}`}
						    _debug_doNotHide={false}
					    >{`Text with tooltip #${index}`}</DynaTooltip>
				    </div>
			    ))}
		    </div>
	    ),
      wrapperStyle:{
	    	overflowY: "auto",
	      height: "100%",
      },
    },
    {
	    slug: 'tooltip-with-no-content',
      faIconName: 'flask',
	    title: 'tooltip with not content',
	    description: "no tooltip is shown since no tooltip content is provided",
      center: true,
	    component: (
		    <DynaTooltip
			    tooltipContent={null}
		    >Text without tooltip content</DynaTooltip>
	    ),
	    props: [
		    {
		    	slug: 'null',
			    title: "null value",
			    props: {
		    		tooltipContent: null,
			    } as IDynaTooltipProps,
		    },
		    {
		    	slug: 'undefined',
			    title: "undefined value",
			    props: {
		    		tooltipContent: undefined,
			    } as IDynaTooltipProps,
		    },
		    {
		    	slug: 'empty-string',
			    title: "empty string value",
			    props: {
		    		tooltipContent: "",
			    } as IDynaTooltipProps,
		    },
		    {
		    	slug: 'empty-array',
			    title: "empty array value",
			    props: {
		    		tooltipContent: [],
			    } as IDynaTooltipProps,
		    },
		    {
		    	slug: 'array-with-empties',
			    title: "array with empties",
			    props: {
		    		tooltipContent: [null, undefined, ""],
			    } as IDynaTooltipProps,
		    },
		    {
		    	slug: 'with-value',
			    title: "with value",
			    props: {
				    tooltipContent: <h1>I am not empty</h1>,
			    } as IDynaTooltipProps,
		    },
	    ],
    },
	  {
		  slug: 'all-colors-directions',
		  faIconName: 'flask',
		  title: 'all colors, all directions',
		  center: true,
		  component: (
			  <DynaTooltip
				  tooltipContent="tooltip content"
				  _debug_doNotHide={false}
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
		  wrapperStyle: {},
	  },
  ]
}as IShowcase;
