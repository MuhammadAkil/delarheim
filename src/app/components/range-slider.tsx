import React, { useState } from "react";
import Slider from "rc-slider";
import type { SliderProps } from "rc-slider";
import { cn } from "rizzui";
import "rc-slider/assets/index.css";

const rangeStyles = {
    base: "[&>.rc-slider-rail]:bg-muted [&>.rc-slider-handle]:opacity-100 [&>.rc-slider-handle-dragging]:!shadow-none [&>.rc-slider-handle-dragging]:ring-4",
    size: {
        sm: "[&>.rc-slider-rail]:h-0.5 [&>.rc-slider-track]:h-0.5 [&>.rc-slider-handle]:h-3 [&>.rc-slider-handle]:w-3 [&>.rc-slider-handle]:border-[3px]",
        md: "[&>.rc-slider-rail]:h-1 [&>.rc-slider-track]:h-1 [&>.rc-slider-handle]:h-4 [&>.rc-slider-handle]:w-4 [&>.rc-slider-handle]:border-4 [&>.rc-slider-handle]:-mt-1.5",
        lg: "[&>.rc-slider-rail]:h-2 [&>.rc-slider-track]:h-2 [&>.rc-slider-handle]:h-5 [&>.rc-slider-handle]:w-5 [&>.rc-slider-handle]:border-[5px] [&>.rc-slider-handle]:-mt-1.5",
        xl: "[&>.rc-slider-rail]:h-3 [&>.rc-slider-track]:h-3 [&>.rc-slider-handle]:h-6 [&>.rc-slider-handle]:w-6 [&>.rc-slider-handle]:border-[6px] [&>.rc-slider-handle]:-mt-1.5",
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
}

const RangeSlider: React.FC<RangeSliderProps> = ({
    size = "md",
    color = "custom",
    className,
    ...props
}) => {
    const [values, setValues] = useState<number[]>([0, 100000]); 

    const onChange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            let [minValue, maxValue] = value;

            if (minValue < maxValue) {
                setValues([minValue, maxValue]);
            } else {
                setValues([maxValue - 1, maxValue]); 
            }
        }
    };

    return (
        <div className="flex flex-col items-center">
            <Slider
                value={values}
                onChange={onChange}
                range
                min={0}
                max={100000} 
                className={cn(
                    rangeStyles.base,
                    rangeStyles.size[size],
                    rangeStyles.color[color],
                    className
                )}
                {...props}
            />
            <div className="flex justify-between w-full mt-2">
                <span className="text-sm">Min: {values[0]}</span>
                <span className="text-sm">Max: {values[1]}</span>
            </div>
        </div>
    );
};

RangeSlider.displayName = "RangeSlider";

export default RangeSlider;
