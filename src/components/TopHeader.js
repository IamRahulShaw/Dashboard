import React from "react";

function TopHeader() {
  return (
    <div id="Top-Header">
      <div id="Place-Order-Button">
        <button>Place Order</button>
      </div>
      <div id="VPPL">
        <a href="#">
          <img src="img/VPPL.png" alt="VPPL" />
        </a>
      </div>
      <div id="Bell">
        <a href="#">
          <img src="img/Bell.png" alt="Bell" />
        </a>
      </div>
    </div>
  );
}

export default TopHeader;
