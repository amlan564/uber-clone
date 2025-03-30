import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setWaitingForDriver(false)}
        className="w-full text-center absolute top-0 left-0"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img
          className="w-32"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="text-right">
            <h2 className="text-lg font-medium">Amlan</h2>
            <h4 className="text-xl font-semibold">MP04 AB 1234</h4>
            <p className="text-sm text-gray-600">Toyota Corolla</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">110/14-A</h3>
              <p className="text-sm text-gray-600">Ramna, Dhaka</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">110/14-A</h3>
              <p className="text-sm text-gray-600">Ramna, Dhaka</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
