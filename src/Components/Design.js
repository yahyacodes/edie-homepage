import React from "react";
import smarthome from "../Images/smarthome.jpg";
import onboard from "../Images/onboard.png";
import booking from "../Images/booking.png";
import juiceProduct from "../Images/juice-product.png";

function Design() {
  return (
    <div className="container mt-8 pt-8">
      <div className="columns px-5 mt-8 2xl:ml-40 xl:ml-40 lg:ml-10 md:ml-10">
        <h1 className="md:text-lg sm:text-base mt-8 font-semibold">
          Good design means <br /> good business
        </h1>
      </div>

      <div className="grid gap-5 2xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 pt-10 mt-10 2xl:ml-40 xl:ml-60 lg:ml-10 md:ml-0">
        <div>
          <img
            src={smarthome}
            alt=""
            className="w-full aspect-square rounded mt-20 "
          />
          <p className="text-gray-300 text-sm">Full stack application</p>
          <h5 className="text-sm">Smart home dashboard</h5>
        </div>
        <div>
          <img
            src={onboard}
            alt=""
            className="w-full aspect-square rounded mt-5"
          />
          <p className="text-gray-300 text-sm">UI/UX design</p>
          <h5 className="text-sm">Onboard application</h5>
        </div>
      </div>

      <div className="grid gap-5 2xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 pt-5 2xl:ml-40 xl:ml-40 lg:ml-10 md:ml-0">
        <div>
          <img
            src={booking}
            alt=""
            className="w-full aspect-square rounded mt-20"
          />
          <p className="text-gray-300 text-sm">Mobile application</p>
          <h5 className="text-sm">Booking system</h5>
        </div>
        <div>
          <img
            src={juiceProduct}
            alt=""
            className="w-full aspect-square rounded mt-5"
          />
          <p className="text-gray-300 text-sm">Front End application</p>
          <h5 className="text-sm">Juice product homepage</h5>
        </div>
      </div>
    </div>
  );
}

export default Design;
