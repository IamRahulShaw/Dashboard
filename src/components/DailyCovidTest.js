import React from "react";
import Ellipse from "./Ellipse";
const sectionStyle = {
  position: "absolute",
  left: "0px",
  top: "0px",
  width: "312.31px",
  height: "18px",
};
const data = [
  {
    svgCol: "#2CB67D",
    name: "Kerala Coconut",
    number: "31,391(50%)",
    top: "0px",
  },
  {
    svgCol: "#6F52ED",
    name: "Tender Coconut",
    number: "15,696(25%)",
    top: "45.65px",
  },
  {
    svgCol: "#FF8906",
    name: "Mango Coconut",
    number: "6,278(10%)",
    top: "91.3px",
  },
  {
    svgCol: "#E53170",
    name: "Gulab Khas Mango",
    number: "9418(15%)",
    top: "137.12px",
  },
];
function DailyCovidTest() {
  return (
    <div id="Daily-Covid-Test">
      <button id="Export-Ledger">Export Ledger</button>
      <div id="Report-Card">
        <div id="Product-Buyed" className="Data-Font-Style">
          Product Buyed
        </div>
        <div id="Month" className="Data-Font-Style">
          January
        </div>
        <div id="Arrow">
          <img src="img/Arrow.png" alt="Arrow" />
        </div>
        <div id="Divider">
          <img src="img/Divider.png" alt="Divider" />
        </div>
        <div id="Chart">
          <img src="img/Chart.png" alt="Chart" />
        </div>
        <div id="Total-Product-Buyed" className="Data-Font-Style">
          Total Product Buyed
        </div>
        <div id="Product-Number" className="Data-Font-Style">
          62,783
        </div>
        <div className="Data-Section">
          {data.map((elem) => {
            return (
              <div
                key={elem.name}
                className="Section"
                style={{ ...sectionStyle, top: elem.top }}
              >
                <Ellipse
                  className="Data-Section-Ellipse"
                  svgCol={elem.svgCol}
                />
                <div className="Data-Section-Name Data-Section-Name-Style">
                  {elem.name}
                </div>
                <div className="Data-Section-Number Data-Font-Style">
                  {elem.number}
                </div>
              </div>
            );
          })}
          {/* <div className="Section">
            <Ellipse className="Data-Section-Ellipse" svgCol="#2CB67D" />
            <div className="Data-Section-Name Data-Section-Name-Style">
              Kerala Coconut
            </div>
            <div className="Data-Section-Number Data-Font-Style">
              31,391(50%)
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DailyCovidTest;
