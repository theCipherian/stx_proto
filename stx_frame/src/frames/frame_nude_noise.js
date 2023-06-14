import React from "react";

export default function Noise() {
  return (
    <React.Fragment>
      <>
        {/*Background noise effect*/}
        <svg className="svg_bg" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.4"
              numOctaves={5}
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              in="noise"
              result="coloredNoise"
              values="1 0 0 0 0.96
              0 1 0 0 0.88
              0 0 1 0 0.76
              0 0 0 1 0"
            />
          </filter>
          <rect
            className="rect_bg"
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
          />
        </svg>
      </>
    </React.Fragment>
  );
}
