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
          <input
            className="input-box"
            type="text"
            placeholder="You can write the name here"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="query-result">
          {filteredItems.length > 0 && query ? (
            <ul>
              {filteredItems.map((value, index) => (
                <li key={uuidv4()} className="dropdown">
                  <div className="elem">
                    <h2>
                      {query
                        ? selectedItem === "passport"
                          ? value.who
                          : value.where
                        : ""}
                    </h2>

                    <button
                      className="btn dropdown"
                      onClick={() => toggleDropdown(index)}
                    >
                      see more
                    </button>
                  </div>

                  <Dropdown
                    value={value}
                    index={index}
                    toggleDropdown={toggleDropdown}
                    dropdown={dropdown}
                  />
                </li>
              ))}
            </ul>
          ) : (
            query && (
              <ul>
                <li className="dropdown not-found">
                  Sorry, we couldn&apos;t find any match...
                </li>
              </ul>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
