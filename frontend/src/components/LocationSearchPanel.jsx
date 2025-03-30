import React from "react";

const LocationSearchPanel = ({ setVehiclePanelOpen, setPanelOpen }) => {
  const locations = [
    "West Rampura, Dhaka",
    "Shyamoli, Dhaka",
    "Dhanmondi, Dhaka",
    "Uttara, Dhaka",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            setVehiclePanelOpen(true);
            setPanelOpen(false);
          }}
          className="flex items-center justify-start gap-4 my-2 p-3 border-gray-100 active:border-black rounded-xl"
        >
          <h2 className="bg-[#eee] w-8 h-8 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4>{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
