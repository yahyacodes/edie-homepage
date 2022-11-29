import React from "react";
import Images from "../Images/heroImage.jpg";

function HeroPage() {
  return (
    <div className="container px-4 py-4 mt-8 mb-8">
      <a href="#Home" className="mt-5 text-sky-400">
        unhappy with your website?
      </a>
      <h1 className="md:text-xl sm:text-lg mt-2 font-semibold">
        We create beatiful
      </h1>
      <h1 className="md:text-xl sm:text-lg mt-2 font-semibold">
        and fast web services
      </h1>

      <img src={Images} alt="Images" className="mt-8 rounded" />

      <div className="columns px-5 mt-5">
        <h1 className="md:text-lg sm:text-base mt-2 font-semibold">
          Story, emotion <br /> and purpose
        </h1>

        <p className="text-sm mt-4">
          We help transform your ideas into real <br />
          world applications that will outperform <br />
          your toughts competition and help you <br />
          achieve your strategic goals in short <br />
          period of time.
        </p>

        <p className="text-sm font-normal text-gray-400 mt-6">
          want us to contact you?
        </p>
        <form className="w-80 max-w-sm">
          <div
            className="flex items-center appearance-none bg-gray-200 text-gray-700 border 
          border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border 
              border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Email"
              aria-label="Full name"
            />
            <button
              className="flex-shrink-0 bg-sky-500 hover:bg-sky-700 border-sky-500 
              hover:border-sky-700 text-sm border-4 text-white py-1 px-3 mx-1 rounded-xl"
              type="button"
            >
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeroPage;
