import React from "react";

const FindCountry = ({ country, onSearch }) => {
  return (
    <div className="px-5 py-5">
      <div class="w-full mx-auto rounded-xl  bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl">
        <h1 class="text-xl my-4 text-center font-semibold text-gray-600">
          Weather forecast for your country
        </h1>{" "}
        <div className="relative mt-1">
          <input
            type="text"
            name="text"
            value={country}
            onChange={onSearch}
            className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Enter your country..."
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-2 flex">
          <div className="h-2 bg-blue-500 flex-1"></div>
          <div className="h-2 bg-yellow-500 flex-1"></div>
          <div className="h-2 bg-blue-500 flex-1"></div>
          <div className="h-2 bg-green-500 flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default FindCountry;
