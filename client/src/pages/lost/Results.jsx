import PropTypes from "prop-types";
import { useState } from "react";

import DropdownMenu from "./DropdownMenu";

const Results = ({ selectedItem, setQuery, filteredItems, query }) => {
  const [activeItemIdx, setActiveItemIdx] = useState(null);

  const toggleDropdown = (itemIdx) => {
    setActiveItemIdx((prev) => (prev === itemIdx ? null : itemIdx));
  };

  const renderResults = (item, itemIdx) => (
    <li key={item.id} className="dropdown">
      <div className="elem" onClick={() => toggleDropdown(itemIdx)}>
        <h2 className="desc">
          {query ? (selectedItem === "passport" ? item.who : item.place) : ""}
        </h2>

        <div
          className={`expand-icon ${activeItemIdx === itemIdx ? "open" : ""}`}
        ></div>
      </div>

      <DropdownMenu
        item={item}
        itemIdx={itemIdx}
        activeItemIdx={activeItemIdx}
      />
    </li>
  );

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
                {filteredItems.map((item, itemIdx) =>
                  renderResults(item, itemIdx)
                )}
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

Results.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  filteredItems: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
};

export default Results;
