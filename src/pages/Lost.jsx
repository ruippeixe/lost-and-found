/* eslint-disable react/prop-types */
import { useState } from "react";
import NavBar from "./navigation/NavBar";

const Lost = ({ foundData }) => {
  const [query, setQuery] = useState("");

  const getFilteredItems = (query, foundData) => {
    if (!query) return foundData;
    return foundData.filter((foundData) => foundData.who.includes(query));
  };

  const filteredItems = getFilteredItems(query, foundData);

  return (
    <>
      <NavBar />

      <input type="text" onChange={(e) => setQuery(e.target.value)} />

      <ul>
        {filteredItems.map((value) => (
          <p key={value.who}>{query ? value.who : ""}</p>
        ))}
      </ul>
    </>
  );
};

export default Lost;
