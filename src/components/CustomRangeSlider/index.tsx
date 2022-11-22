import React, { useState, useEffect } from "react";
import MinMaxSlider from "./RangeStyles";

export interface CustomRangeSliderInterface {
    min?: number;
    max?: number;
    thumbsize?: number;
    RangeChange?: Function;
}

const CustomRangeSlider: React.FC<CustomRangeSliderInterface> = ({
    min,
    max,
    thumbsize = 10,
    ...props
}) => {
    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(avg);
    const [maxVal, setMaxVal] = useState(avg);

    const { RangeChange } = props;

    const width = 300;
    const minWidth =
        thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
    let styles = {
        min: {
            width: minWidth,
            left: 0,
        },
        max: {
            width:
                thumbsize +
                ((max - avg) / (max - min)) * (width - 2 * thumbsize),
            left: minWidth,
        },
    };

    useEffect(() => {
        styles = {
            min: {
                width: minWidth,
                left: 0,
            },
            max: {
                width:
                    thumbsize +
                    ((max - avg) / (max - min)) * (width - 2 * thumbsize),
                left: minWidth,
            },
        };
    },[]);

    useEffect(() => {
        setAvg((maxVal + minVal) / 2);
        RangeChange({minVal, maxVal});
    }, [minVal, maxVal]);

    return (
        <MinMaxSlider>
            <label htmlFor="rangeMin">Minimum price</label>
            <input
                id="rangeMin"
                className="min"
                style={styles.min}
                name="min"
                type="range"
                step="1"
                min={min}
                max={avg}
                value={minVal}
                onChange={({ target }) => setMinVal(Number(target.value))}
            />
            <label htmlFor="rangeMax">Maximum price</label>
            <input
                id="rangeMax"
                className="max"
                style={styles.max}
                name="max"
                type="range"
                step="1"
                min={avg}
                max={max}
                value={maxVal}
                onChange={({ target }) => setMaxVal(Number(target.value))}
            />
        </MinMaxSlider>
    );
};

export default CustomRangeSlider;
