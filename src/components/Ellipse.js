import React from "react";

function Ellipse({ svgCol, className }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle id="Ellipse-Circle" cx="4.5" cy="4.5" r="4.5" fill={svgCol} />
    </svg>
  );
}

export default Ellipse;
