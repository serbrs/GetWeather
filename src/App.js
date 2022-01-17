import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryDetails from "./component/CountryDetails";
import FindCountry from "./component/FindCountry";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleSearch = (event) => {
    setCountry(event.target.value);
  };

  const loverCaseFilter = country.toLowerCase();
  const filteredData = countries.filter((country) => {
    return Object.keys(country).some((name) =>
      country.name.toLowerCase().includes(loverCaseFilter)
    );
  });

  return (
    <div className="h-screen bg-indigo-500 text-gray-700">
      <FindCountry country={country} onSearch={handleSearch} />
      {filteredData && filteredData.length !== 0 ? (
        <CountryDetails filteredData={filteredData} country={country} />
      ) : null}
    </div>
  );
};

export default App;
