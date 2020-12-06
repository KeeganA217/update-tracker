import React, { useRef, useContext } from "react";
import LogContext from "../context/logs/logContext";

const Search = () => {
  const logContext = useContext(LogContext);

  const { filterLogs } = logContext;

  const text = useRef("");

  const onChange = (e) => {
    filterLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs.."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Search;
