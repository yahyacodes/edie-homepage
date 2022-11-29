import React from "react";
import { BiPencil } from "react-icons/bi";
import { BsCode } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";

function Cards() {
  return (
    <div className="container mt-8 pt-20 pl-5">
      <div className="columns px-5 mt-5">
        <h1 className="md:text-lg sm:text-base mt-2 font-semibold">
          We offer high <br /> demand services
        </h1>
      </div>

      <div className="grid 2xl:grid-cols-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 ">
        <div className="w-80 mt-8 p-6 bg-white border rounded-lg shadow-md">
          <div className="text-white bg-sky-500 rounded h-8 w-8">
            <BiPencil className="text-lg" />
          </div>
          <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-black">
            UI/UX Design
          </h5>

          <p className="mb-3 font-normal text-gray-700 text-sm">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <button
            type="button"
            className="text-white bg-gray-400 hover:bg-sky-500 
        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 
        mr-2 mb-2 mt-2"
          >
            Get started
          </button>
        </div>

        {/* Frontend */}

        <div className="w-80 mt-8 p-6 bg-white border rounded-lg shadow-md">
          <div className="text-white bg-green-500 h-8 w-8 rounded">
            <BsCode className="text-lg" />
          </div>
          <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-black">
            Front End
          </h5>

          <p className="mb-3 font-normal text-gray-700 text-sm">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <button
            type="button"
            className="text-white bg-gray-400 hover:bg-sky-500 
        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 
        mr-2 mb-2 mt-2"
          >
            Get started
          </button>
        </div>

        {/* Backend */}
        <div className="w-80 mt-8 p-6 bg-white border rounded-lg shadow-md">
          <div className="text-white bg-red-500 h-8 w-8 rounded">
            <AiFillDatabase className="text-lg" />
          </div>
          <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-black">
            Back End
          </h5>

          <p className="mb-3 font-normal text-gray-700 text-sm">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <button
            type="button"
            className="text-white bg-gray-400 hover:bg-sky-500 
        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 
        mr-2 mb-2 mt-2"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
