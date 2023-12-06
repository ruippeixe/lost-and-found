/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";

const Results = ({ selectedItem, setQuery, filteredItems, query }) => {
  return (
    <>
      <div className="query-search">
        <div className="query-input">
          <h1 className="title">
            {selectedItem === "passport" && "What's your name?"}
            {selectedItem === "keys" && "In what city?"}
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
              query && (
                <p className="title not-found">
                  Sorry, we couldn&apos;t find any match...
                </p>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Results;
