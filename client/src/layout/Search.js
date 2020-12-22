import React, { useRef, useContext, useEffect } from "react";
import LogContext from "../context/logs/logContext";

const Search = () => {
  const logContext = useContext(LogContext);

  const { filterLogs, clearFilter, filtered } = logContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterLogs(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l8 offset-l2">
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input
              id="icon-prefix"
              type="text"
              name="search"
              ref={text}
              onChange={onChange}
              className="validate"
            />
            <label htmlFor="search">Search Logs...</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
