import PropTypes from "prop-types";
import { useState } from "react";
import NavBar from "../navigation/NavBar";
import Results from "./Results";
import Options from "./Options";
import "./lost.scss";

const Lost = ({ foundData }) => {
  document.title = 'L&F - Lost';

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
        <Options
          updateFieldHandler={updateFieldHandler}
          selectedItem={selectedItem}
          isFirstStep={isFirstStep}
          handleSubmit={handleSubmit}
        />
      )}

      {!isFirstStep && (
        <Results
          selectedItem={selectedItem}
          setQuery={setQuery}
          filteredItems={filteredItems}
          query={query}
        />
      )}
    </div>
  );
};

Lost.propTypes = {
  foundData: PropTypes.array.isRequired,
};

export default Lost;
