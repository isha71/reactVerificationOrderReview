import React from "react";

function Headline({ headlineText }) {
  return (
    <div className="columnAlignment headlineWrapper">
      <h1 className="headline">{headlineText}</h1>
    </div>
  );
}

export default Headline;
