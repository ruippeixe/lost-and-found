/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Results = ({ selectedItem, setQuery, filteredItems, query }) => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setDropdown((prevDropdown) => (prevDropdown === index ? null : index));
  };

  return (
    <>
      <div className="query-search">
        <div className="query-input">
          <h1 className="title">
            {selectedItem === "passport" && "What's your name?"}
            {selectedItem === "keys" && "In what city?"}
          </h1>
          <input className="input-box" type="text" onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div className="query-result">
          <ul>
            {filteredItems.length > 0 && query ? (
              <li>
                {filteredItems.map((value, index) => (
                  <div key={uuidv4()} className="title">
                    {query
                      ? selectedItem === "passport"
                        ? value.who
                        : value.where
                      : ""}
                    <Dropdown
                      value={value}
                      index={index}
                      toggleDropdown={toggleDropdown}
                      dropdown={dropdown}
                    />
                  </div>
                ))}
              </li>
            ) : (
              query && (
                <li className="title not-found">
                  Sorry, we couldn&apos;t find any match...
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Results;
