import React from "react";
const ProgressionHeaderData = [
  "Placed",
  "Accepted",
  "Harvested",
  "Loaded",
  "InTransit",
  "Deliver",
  "Received",
  "Full Payment",
  "Completed",
];

function TrackYourOrderSection() {
  return (
    <div id="Track-Your-Order-Section">
      <div id="Track-Your-Order-Text">Track Your Order</div>
      <div id="Progression-Header">
        <div id="Right-Side-Progression-Header">
          <ul>
            {ProgressionHeaderData.map((element, index, array) => {
              if (index === array.length - 1) {
                return <li className="Progression-Header-Text">{element}</li>;
              }
              return (
                <>
                  <li className="Progression-Header-Text">{element}</li>
                  <li className="Progression-Header-Line">
                    <img src="img/Line.png" alt="Line" />
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div id="Order-Id">Order Id</div>
      </div>
      <div id="Order-Id-Code">
        <div className="Order-Id-Code-Text">#000000</div>
        <div className="Order-Id-Code-Text">#000000</div>
        <div className="Order-Id-Code-Text">#000000</div>
      </div>
      <div id="Progression">
        <img src="img/Progression.png" alt="Progression" />
      </div>
    </div>
  );
}

export default TrackYourOrderSection;
