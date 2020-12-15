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

  const onClick = () => {
    clearFilter();
  };

  return (
    <nav className="grey lighten-4 container search-bar z-depth-3">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs.."
              ref={text}
              onChange={onChange}
              autoComplete="off"
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons valign-wrapper black-text">search</i>
            </label>
            <i onClick={onClick} className="material-icons">
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Search;
