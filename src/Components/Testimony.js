import React from "react";
import person4 from "../Images/person4.png";

function Testimony() {
  return (
    <div className="container mt-8 pt-8">
      <div className="columns px-5 pt-8 mt-8 2xl:ml-60 xl:ml-20 lg:ml-10 md:ml-10">
        <h3 className="md:text-lg sm:text-base mt-8 font-medium max-w-2xl">
          "Fast and outstanding results. Edie understands their customer's
          needs. They have a young and talented team."
        </h3>

        <div className="grid gap-5 2xl:grid-cols-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1">
          <div>
            <img src={person4} alt="" className="w-20 h-20 rounded mt-2" />
            <h3 className="text-sm font-semibold mt-2">Carlos Tran</h3>
            <p className="tex-sm text-gray-400">The Decorate Gatsby</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
