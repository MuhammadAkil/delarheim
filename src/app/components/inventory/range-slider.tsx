import React, { useState } from "react";
import Slider from "rc-slider";
import type { SliderProps } from "rc-slider";
import { cn } from "rizzui";
import "rc-slider/assets/index.css";

const rangeStyles = {
	base: "[&>.rc-slider-rail]:bg-muted [&>.rc-slider-handle]:opacity-100 !z-0 [&>.rc-slider-handle-dragging]:!shadow-none [&>.rc-slider-handle-dragging]:ring-4",
	size: {
		md: "[&>.rc-slider-rail]:h-1 [&>.rc-slider-track]:h-1 [&>.rc-slider-handle]:h-4 [&>.rc-slider-handle]:w-4 [&>.rc-slider-handle]:border-4 [&>.rc-slider-handle]:-mt-1.5",
	},
	color: {
		custom: `[&>.rc-slider-track]:bg-[#6b5fff] 
              [&>.rc-slider-handle]:border-[#6b5fff] 
              [&>.rc-slider-handle]:hover:border-[#6b5fff] 
              [&>.rc-slider-handle-dragging]:!border-[#6b5fff] 
              [&>.rc-slider-handle-dragging]:ring-[#6b5fff]/40 
              [&>.rc-slider-step>.rc-slider-dot-active]:border-[#6b5fff] 
              [&>.rc-slider-track]:bg-[#6b5fff] !important`,
	},
};

export interface RangeSliderProps extends SliderProps {
	size?: keyof typeof rangeStyles.size;
	color?: keyof typeof rangeStyles.color;
	minValue: number;
	maxValue: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ size = "md", color = "custom", className, minValue, maxValue, ...props }) => {
	return (
		<div className="flex flex-col items-center">
			<Slider value={[minValue, maxValue]} className={cn(rangeStyles.base, rangeStyles.size[size], rangeStyles.color[color], className)} {...props} />
			<div className="flex justify-between w-full mt-2">
				<span className="text-sm">${minValue}</span>
				<span className="text-sm">${maxValue}</span>
			</div>
		</div>
	);
};

RangeSlider.displayName = "RangeSlider";
export default RangeSlider;
