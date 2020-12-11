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

  // const onChange = (e) => {
  //   filterLogs(text.current.value);
  // };

  const onClick = () => {
    clearFilter();
  };

  return (
    <nav style={{ marginBottom: "20px" }} className="blue lighten-2 container">
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
              <i className="material-icons">search</i>
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
