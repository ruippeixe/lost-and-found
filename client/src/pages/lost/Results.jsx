/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Results = ({ selectedItem, setQuery, filteredItems, query }) => {
  const [dropdown, setDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdown((prevDropdown) => (prevDropdown === index ? null : index));
    setIsOpen((prevIsOpen) => (prevIsOpen === index ? null : index));
  };

  return (
    <>
      <div className="query-search">
        <div className="top-container">
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
        </div>

        <div className="bottom-container">
          <div className="query-result">
            {filteredItems.length > 0 && query ? (
              <ul>
                {filteredItems.map((value, index) => (
                  <li key={uuidv4()} className="dropdown">
                    <div className="elem" onClick={() => toggleDropdown(index)}>
                      <h2 className="desc">
                        {query
                          ? selectedItem === "passport"
                            ? value.who
                            : value.place
                          : ""}
                      </h2>

                      <div
                        className={`expand ${isOpen === index ? "open" : ""}`}
                      ></div>
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
      </div>
    </>
  );
};
export default Results;
