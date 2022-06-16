import React from "react";

let data = [
  {
    src: "img/First Cases Img.png",
    alt: "First Cases Img",
    number: "62,783",
    line: "Total Product Buyed",
    id: 1,
  },
  {
    src: "img/Second Cases Img.png",
    alt: "Second Cases Img",
    number: "226",
    line: "Connected with farmer",
    id: 2,
  },
  {
    src: "img/Third Cases Img.png",
    alt: "Third Cases Img",
    number: "11.91%",
    line: "Active in site",
    id: 3,
  },
];

function CasesHeader() {
  return (
    <div id="Cases-Header">
      {data.map((element) => {
        return (
          <div className="Cases" key={element.id}>
            <img src={element.src} alt={element.alt} />
            <div className="Cases-Number">{element.number}</div>
            <div className="Cases-Line">{element.line}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CasesHeader;
