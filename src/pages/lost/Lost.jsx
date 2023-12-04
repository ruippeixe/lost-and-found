import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import NavBar from "../navigation/NavBar";
import "./lost.scss";

const Lost = ({ foundData }) => {
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");
  const [query, setQuery] = useState("");

  const getFilteredItems = (query, foundData) => {
    if (!query) return foundData;

    if (selectedItem === "passport")
      return foundData.filter(
        (item) => item.who.includes(query) && item.what === "passport"
      );
    else
      return foundData.filter(
        (item) => item.where.includes(query) && item.what === "keys"
      );
  };

  const filteredItems = getFilteredItems(query, foundData);

  const updateFieldHandler = (field, value) => {
    setSelectedItem(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFirstStep(false);
  };

  return (
    <div className="lost">
      <NavBar />

      {isFirstStep && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-element">
            <h1 className="title">What did you lose?</h1>
            <select
              value={selectedItem}
              onChange={(e) => updateFieldHandler("what", e.target.value)}
              required
            >
              <option value="" disabled>
                Select the item
              </option>
              <option value="passport">Passport</option>
              <option value="keys">Keys</option>
            </select>
          </div>

          <div className="actions">
            {isFirstStep ? (
              <button type="submit" className="btn inverse">
                next
              </button>
            ) : null}
          </div>
        </form>
      )}

      {!isFirstStep && (
        <div className="query-search">
          <div className="query-input">
            <h1 className="title">
              {selectedItem === "passport" && "What's your name?"}
              {selectedItem === "keys" && "In what city did you lose them?"}
            </h1>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
          </div>

          <div className="query-result">
            <ul>
              {filteredItems.length > 0 ? (
                <ul>
                  {selectedItem === "passport" &&
                    filteredItems.map((value) => (
                      <p key={uuidv4()} className="title">
                        {query ? value.who : ""}
                      </p>
                    ))}

                  {selectedItem === "keys" &&
                    filteredItems.map((value) => (
                      <p key={uuidv4()} className="title">
                        {query ? value.where : ""}
                      </p>
                    ))}
                </ul>
              ) : (
                query && <p className="title not-found">Sorry, we couldn&apos;t find it...</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

Lost.propTypes = {
  foundData: PropTypes.array.isRequired,
};

export default Lost;
