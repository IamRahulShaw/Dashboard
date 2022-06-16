import React from "react";

function NavItemsMiddle() {
  return (
    <div id="Nav-Items-Middle">
      <ul>
        <li>
          <a href="#">
            <img
              src="img/Home.png"
              alt="Home"
              style={{ position: "relative", right: "3px" }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/Profile.png" alt="Profile" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/Post Your Order.png" alt="Post Your Order" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/About Us.png" alt="About Us" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavItemsMiddle;
