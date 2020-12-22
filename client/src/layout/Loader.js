import React from "react";

const Loader = () => {
  return (
    <div className="preloader-wrapper big active" style={style}>
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

const style = { margin: "auto", display: "block", marginTop: "150px" };

export default Loader;
