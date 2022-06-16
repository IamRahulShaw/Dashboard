import React from "react";
import CasesHeader from "./CasesHeader";
import DailyCovidTest from "./DailyCovidTest";
import FarmerSection from "./FarmerSection";
import MandiPriceSection from "./MandiPriceSection";
import TopHeader from "./TopHeader";
import TrackYourOrderSection from "./TrackYourOrderSection";

function RightMainSection() {
  return (
    <div id="Right-Main-Section">
      <TopHeader />
      <CasesHeader />
      <TrackYourOrderSection />
      <MandiPriceSection />
      <FarmerSection />
      <DailyCovidTest />
    </div>
  );
}

export default RightMainSection;
