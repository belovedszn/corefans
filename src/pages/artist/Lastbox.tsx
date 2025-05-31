import React from "react";
import mobile from "../../assets/images/mobile.png"

function Lastbox() {
  return (
    <div className="flex items-center justify-between my-12.5 max-md:flex-col">
      <div className="flex flex-col">
        <div className="text-white text-5xl max-2xl:text-4xl max-xl:text-3xl max-lg:text-2xl" style={{ fontFamily: "Grotesk" }}>
          GET STARTED IN 5 MINS
        </div>

        <button
          className="relative overflow-hidden text-white px-6 py-4 mt-8 w-fit rounded-md font-medium text-lg group cursor-pointer max-md:w-full"
          style={{
            background: "linear-gradient(to right, #F18B1B, #E52053)",
          }}
        >
          <span className="relative z-10">Select Exclusive</span>
          <span className="relative z-10">
            <i className="bi bi-arrow-right text-white ml-4"></i>
          </span>

          <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 blur-sm skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[300%]"></span>
        </button>
      </div>
      <div className="">
        <img src={mobile} alt="Get Started In 5 Minutes" />
      </div>
    </div>
  );
}

export default Lastbox;
