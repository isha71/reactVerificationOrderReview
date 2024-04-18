import React from "react";

function Tagline({ taglineText }) {
  return (
    <div className="columnAlignment taglineWrapper">
      <p className="tagline">{taglineText}</p>
    </div>
  );
}

export default Tagline;
