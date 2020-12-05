import React from "react";

const Search = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="input-field l8 center-align">
            <input id="search" type="search" className="validate" />
            <label htmlFor="search">Search Logs...</label>
            <i className="material-icons">close</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
