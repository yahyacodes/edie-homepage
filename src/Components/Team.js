import React from "react";
import person1 from "../Images/person1.png";
import person2 from "../Images/person2.png";
import person3 from "../Images/person3.png";

function Team() {
  return (
    <div className="container mt-8 pt-8">
      <div className="grid 2xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1">
        <div className="ml-auto 2xl:ml-40 xl:ml-20 md:ml-20 sm:ml-5 lg:mt-20">
          <p className="text-red-500 text-sm mt-8">Meet the team</p>
          <h1 className="md:text-lg sm:text-base font-semibold">
            We are chilled <br /> and a laidback <br /> team
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <img
          src={person3}
          alt=""
          className="2xl:w-40 2xl:h-40 xl:w-40 xl:h-40 lg:w-80 lg:h-80 md:w-80 md:h-80 sm:w-80 sm:h-80 rounded mt-20 2xl:ml-60 xl:ml-40 lg:ml-10 md:ml-20 sm:ml-5"
        />
        <div>
          <img
            src={person1}
            alt=""
            className="2xl:w-40 2xl:h-40 xl:w-40 xl:h-40 lg:w-80 lg:h-80 md:w-80 md:h-80 sm:w-80 sm:h-80 rounded 2xl:ml-2 xl:ml-2 lg:ml-40 md:ml-20 sm:ml-5 sm:mt-5"
          />
          <img
            src={person2}
            alt=""
            className="2xl:w-40 2xl:h-40 xl:w-40 xl:h-40 lg:w-80 lg:h-80 md:w-80 md:h-80 sm:w-80 sm:h-80 rounded mt-5 2xl:ml-2 xl:ml-2 lg:ml-40 md:ml-20 sm:ml-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
