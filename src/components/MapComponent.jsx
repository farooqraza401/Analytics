import React, { useState } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

const MapComponent = () => {
  // const [hoveredCountry, setHoveredCountry] = useState("");
  // const [countryData, setCountryData] = useState("");

  // Sample country data
  const countryValues = {
    US: "$3,760,125.00", // United States
    IN: "$1,580,750.00", // India
    DE: "$2,150,920.00", // Germany
    CN: "$4,800,400.00", // China
    RU: "$1,350,200.00", // Russia
    BR: "$970,500.00", // Brazil
    FR: "$2,470,680.00", // France
    JP: "$5,050,300.00", // Japan
    CA: "$1,430,250.00", // Canada
    GB: "$2,980,000.00", // United Kingdom
    IT: "$1,910,750.00", // Italy
    AU: "$1,320,500.00", // Australia
    ES: "$1,230,450.00", // Spain
    MX: "$1,050,700.00", // Mexico
    KR: "$1,860,900.00", // South Korea
    SA: "$780,350.00", // Saudi Arabia
    ZA: "$470,600.00", // South Africa
    NG: "$415,300.00", // Nigeria
    AR: "$490,200.00", // Argentina
    EG: "$310,250.00", // Egypt
    TR: "$890,750.00", // Turkey
    PK: "$250,450.00", // Pakistan
    IR: "$360,100.00", // Iran
    TH: "$620,400.00", // Thailand
    VN: "$400,250.00", // Vietnam
    ID: "$820,500.00", // Indonesia
    MY: "$330,700.00", // Malaysia
    SG: "$620,900.00", // Singapore
    PH: "$300,100.00", // Philippines
    KE: "$115,300.00", // Kenya
    ET: "$90,450.00", // Ethiopia
    CO: "$290,700.00", // Colombia
    CL: "$210,500.00", // Chile
    PE: "$200,900.00", // Peru
    BD: "$250,600.00", // Bangladesh
  };

  const handleRegionTipShow = (e, label, code) => {
    label.html(`${label.text()}`);
  };

  return (
    <div className="jvectormap-container chart-container-section">
      <div className="jvectormap">
        <h3 className="map-title">Bird's Eyes</h3>
        <div className="map-fix">
          <div className="map-boredr-btn1" />
          <div className="map-boredr-btn2" />
          <div className="map-boredr-btn3" />
        </div>
      </div>
      <VectorMap
        map={worldMill}
        backgroundColor="#d4f1f4"
        containerStyle={{}}
        regionStyle={{
          initial: {
            fill: "#a7c5eb",
          },
          hover: {
            fill: "#79a8d1",
            cursor: "pointer",
          },
        }}
        onRegionTipShow={handleRegionTipShow}
        zoomOnScroll={false}
      />
      {/* <div className="info-box">
      <p>
        {hoveredCountry ? (
          <>
            <strong>{hoveredCountry}</strong>: {countryData}
          </>
        ) : (
          "Hover over a country to view details."
        )}
      </p>
    </div> */}
    </div>
  );
};

export default MapComponent;
