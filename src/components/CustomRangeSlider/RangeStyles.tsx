import styled from "styled-components";

const MinMaxSlider = styled.div`
    position: relative;
    width: 200px;
    text-align: center;
    margin-bottom: 50px;

    & > label {
        display: none;
    }

    & > input {
        cursor: pointer;
        position: absolute;
    }

    & > input {
        -webkit-appearance: none;
        outline: none !important;
        background: transparent;
        background-image: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 30%,
            #FCE9EC 30%,
            #FCE9EC 60%,
            transparent 60%,
            transparent 100%
        );
    }
    & > input::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 14px; /* Set a specific slider handle width */
        height: 14px; /* Slider handle height */
        background: #D23F57; /* Green background */
        cursor: pointer; /* Cursor on hover */
        border: 1px solid #D23F57;
        border-radius: 100%;
    }

    & > input::-webkit-slider-runnable-track {
        cursor: pointer;
    }
`;


export default MinMaxSlider;