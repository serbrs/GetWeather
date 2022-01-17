import React, { useEffect, useState } from "react";
import axios from "axios";
const CountryDetail = ({ data, countryName }) => {
  const [weather, setWeather] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const city = data.map((city) => city.name);

    console.log("city is", city);
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      )
      .then((response) => {
        setWeather(response.data);
        setIsFetching(false);
      })
      .catch((error) => console.error(`Error fetching weather  with${error}`));
  }, [data, api_key]);

  const temp = Object.values(weather).find((w) => w.temperature);
  const country = Object.values(weather).find((w) => w.country);
  // console.log(temp);
  // console.log(country);
  return (
    <div className="">
      {isFetching ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
            <svg
              fill="none"
              className="w-24 h-24 animate-spin"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>

            <div className="text-xl">Loading ...</div>
          </div>
        </div>
      ) : (
        <>
          <div class="flex justify-center flex-wrap ">
            <div class="flex flex-col p-8 bg-white shadow-lg rounded-lg  flex-1  md:mb-0  md:w-1/3 sm:flex-initial ">
              <div className="font-bold text-xl">{country.country}</div>
              <div className="text-sm text-gray-500">
                {new Date(country.localtime).toUTCString().slice(0, 22)}
              </div>
              <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-34 w-34">
                <img src={temp.weather_icons} alt="" />
              </div>
              <div className="flex flex-row items-center justify-center mt-6">
                <div className="font-medium text-6xl">{temp.temperature}°C</div>
                <div className="flex flex-col items-center ml-6">
                  <div>{temp.weather_descriptions}</div>
                  <div className="mt-1">
                    <span className="text-sm">
                      <i className="far fa-long-arrow-up"></i>
                    </span>
                    <span className="text-sm font-light text-gray-500">
                      {temp.temperature}°C
                    </span>
                  </div>
                  <div>
                    <span className="text-sm">
                      <i className="far fa-long-arrow-down"></i>
                    </span>
                    <span className="text-sm font-light text-gray-500">
                      20°C
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Wind</div>
                  <div className="text-sm text-gray-500">
                    {temp.wind_speed} k/h
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Humidity</div>
                  <div className="text-sm text-gray-500">{temp.humidity} %</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Visibility</div>
                  <div className="text-sm text-gray-500">
                    {temp.visibility} km
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetail;
