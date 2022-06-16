import React from "react";
import Ellipse from "./Ellipse";

const dataPriceCard = [
  "Tender Coconut",
  "Karnataka Tender Coconut",
  "Kerala Tender Coconut",
];
let defaultStyle = {
  position: "absolute",
  width: "270px",
  height: "166px",
  left: "1px",
  top: "64px",
  background: "#FFFFFF",
  boxSshadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
};
function MandiPriceSection() {
  return (
    <div id="Mandi-Price-Section">
      <div id="Mandi-Price-Text">Mandi Price</div>
      {dataPriceCard.map((elem, index) => {
        let left, svgCol;
        switch (index) {
          case 0:
            left = 1;
            svgCol = "#33FD22";
            break;
          case 1:
            left = 319;
            svgCol = "#FD2222";
            break;
          case 2:
            left = 637;
            svgCol = "#33FD22";
            break;
          default:
            break;
        }
        return (
          <div
            className="Mandi-Price-Card"
            style={{ ...defaultStyle, left: `${left}px` }}
            key={elem}
          >
            <div className="Price-Card-Image">
              <img src="img/Price Card Image.png" alt="Price Card Image" />
            </div>
            <div className="Price-Card-Firstline">{elem}</div>
            <div className="Price-Card-Secondline">₹50-60/Piece</div>
            <div className="Price-Card-Thirdline">Bowenpally ( 3 KM )</div>
            <div className="Rectangle-Price-Card">
              <img
                src="img/Rectangle Price Card.png"
                alt="Rectangle Price Card"
              />
            </div>
            <Ellipse svgCol={svgCol} />
            <div className="Percentage-Text">+5%</div>
          </div>
        );
      })}
    </div>
  );
}

export default MandiPriceSection;
