import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./index.scss";

const InputSearch = ({ query, setQuery }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (location !== "") setQuery(location);
  };

  useEffect(() => {
    setLocation(query);
  }, [query]);

  return (
    <div className="top_section">
      <p className="country">Country / City</p>
      <input
        type="text"
        value={location}
        placeholder="Please Enter Country / City Name"
        onChange={(e) => setLocation(e.currentTarget.value)}
        className="search_input"
      />
      <button className="search_button" onClick={handleSubmit}>
        <CiSearch style={{ fontSize: "2rem" }} />
      </button>
    </div>
  );
};

export default InputSearch;
