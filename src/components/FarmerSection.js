import React from "react";

let defaultStyle;
function FarmerSection() {
  return (
    <div className="Farmer-Section">
      <div className="Farmer-Text">Farmer</div>
      {[0, 1, 2].map((elem) => {
        switch (elem) {
          case 0:
            defaultStyle = { top: "35px" };
            break;
          case 1:
            defaultStyle = { top: "249px" };
            break;
          case 2:
            defaultStyle = { top: "460px" };
            break;

          default:
            break;
        }
        return (
          <div className="Farmer-Card" style={defaultStyle} key={elem}>
            <div className="Farmer-Image">
              <img src="img/Farmer Image.png" alt="Farmer Image" />
            </div>
            <div className="Farmer-Name">Rama</div>
            <div className="Farmer-Rating">
              <img src="img/Farmer Rating.png" alt="Farmer Rating" />
            </div>
            <div className="Crop-Background">
              <img src="img/Crop Background.png" alt="Crop Background" />
            </div>
            <div className="Farmer-Crop">
              <img src="img/Farmer Crop.png" alt="Farmer Crop" />
            </div>
            <div className="Farmer-Location-Heading Farmer-First-Heading">
              Location
            </div>
            <div className="Farmer-Location-Text Farmer-First-Heading-Text">
              Hyderabad
            </div>
            <div className="Farmer-Current-Crop-Heading Farmer-First-Heading">
              Current Crop
            </div>
            <div className="First-Circle">
              <img src="img/Circle Farmer.png" alt="Circle Farmer" />
            </div>
            <div className="Farmer-Current-Crop-Text Farmer-First-Heading-Text">
              Tender Coconut
            </div>
            <div className="Farmer-Average-Weight-Heading Farmer-First-Heading">
              Average Weight
            </div>
            <div className="Second-Circle">
              <img src="img/Circle Farmer.png" alt="Circle Farmer" />
            </div>
            <div className="Farmer-Average-Weight-Text Farmer-First-Heading-Text">
              1/kg
            </div>
            <div className="Farmer-Desc">
              <div className="Farmer-Desc-Date Farmer-Second-Heading">
                28/02/2022
              </div>
              <div className="Farmer-Desc-EDH Farmer-Second-Heading-Text">
                EDH
              </div>
              <div className="First-Line">
                <img
                  src="img/Farmer Vertical Line.png"
                  alt="Farmer Vertical Line"
                />
              </div>
              <div className="Farmer-Desc-Quantity Farmer-Second-Heading">
                10 tons
              </div>
              <div className="Farmer-Desc-Exp-Quantity Farmer-Second-Heading-Text">
                Exp Quantity
              </div>
              <div className="Second-Line">
                <img
                  src="img/Farmer Vertical Line.png"
                  alt="Farmer Vertical Line"
                />
              </div>
              <div className="Farmer-Desc-Price Farmer-Second-Heading">
                Rs. 50/Piece
              </div>
              <div className="Farmer-Desc-Exp-Price Farmer-Second-Heading-Text">
                Exp Price
              </div>
            </div>
          </div>
        );
      })}
      <div className="Farmer-Card">
        <div className="Farmer-Image">
          <img src="img/Farmer Image.png" alt="Farmer Image" />
        </div>
        <div className="Farmer-Name">Rama</div>
        <div className="Farmer-Rating">
          <img src="img/Farmer Rating.png" alt="Farmer Rating" />
        </div>
        <div className="Crop-Background">
          <img src="img/Crop Background.png" alt="Crop Background" />
        </div>
        <div className="Farmer-Crop">
          <img src="img/Farmer Crop.png" alt="Farmer Crop" />
        </div>
        <div className="Farmer-Location-Heading Farmer-First-Heading">
          Location
        </div>
        <div className="Farmer-Location-Text Farmer-First-Heading-Text">
          Hyderabad
        </div>
        <div className="Farmer-Current-Crop-Heading Farmer-First-Heading">
          Current Crop
        </div>
        <div className="First-Circle">
          <img src="img/Circle Farmer.png" alt="Circle Farmer" />
        </div>
        <div className="Farmer-Current-Crop-Text Farmer-First-Heading-Text">
          Tender Coconut
        </div>
        <div className="Farmer-Average-Weight-Heading Farmer-First-Heading">
          Average Weight
        </div>
        <div className="Second-Circle">
          <img src="img/Circle Farmer.png" alt="Circle Farmer" />
        </div>
        <div className="Farmer-Average-Weight-Text Farmer-First-Heading-Text">
          1/kg
        </div>
        <div className="Farmer-Desc">
          <div className="Farmer-Desc-Date Farmer-Second-Heading">
            28/02/2022
          </div>
          <div className="Farmer-Desc-EDH Farmer-Second-Heading-Text">EDH</div>
          <div className="First-Line">
            <img
              src="img/Farmer Vertical Line.png"
              alt="Farmer Vertical Line"
            />
          </div>
          <div className="Farmer-Desc-Quantity Farmer-Second-Heading">
            10 tons
          </div>
          <div className="Farmer-Desc-Exp-Quantity Farmer-Second-Heading-Text">
            Exp Quantity
          </div>
          <div className="Second-Line">
            <img
              src="img/Farmer Vertical Line.png"
              alt="Farmer Vertical Line"
            />
          </div>
          <div className="Farmer-Desc-Price Farmer-Second-Heading">
            Rs. 50/Piece
          </div>
          <div className="Farmer-Desc-Exp-Price Farmer-Second-Heading-Text">
            Exp Price
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerSection;
