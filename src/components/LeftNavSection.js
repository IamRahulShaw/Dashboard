import React from "react";
import NavItemsBottom from "./NavItemsBottom";
import NavItemsMiddle from "./NavItemsMiddle";
import NavItemsTop from "./NavItemsTop";

function LeftNavSection() {
  return (
    <div id="Left-Nav-Section">
      <NavItemsTop />
      <NavItemsMiddle />
      <NavItemsBottom />
    </div>
  );
}

export default LeftNavSection;
