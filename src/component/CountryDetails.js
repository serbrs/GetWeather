import React from "react";
import CountryDetail from "./CountryDetail";

const CountryDetails = ({ filteredData, country }) => {
  return (
    <div className="p-2 mt-2 ">
      {country &&
        (country.length > 1 ? (
          filteredData.length < 2 ? (
            <CountryDetail data={filteredData} countryName={country} />
          ) : (
            filteredData.map((country, i) => (
              <div className="flex justify-center mb-1 mt-2 ">
                <div className="shadow-sm rounded-lg w-1/2">
                  <ul className="divide-y divide-gray-400">
                    <li
                      key={i}
                      className="mt-2 bg-white p-6 rounded-md text-gray-500 shadow-lg"
                    >
                      {country.name}
                    </li>
                  </ul>
                </div>
              </div>
            ))
          )
        ) : (
          <div className="flex justify-center p-2 mb-4">
            <h1 className="text-2xl text-orange-500">
              Too many matches, specify another filter
            </h1>
          </div>
        ))}
    </div>
  );
};

export default CountryDetails;
