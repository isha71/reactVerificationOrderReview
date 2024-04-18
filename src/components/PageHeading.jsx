import React from "react";

function PageHeading({headingText}) {
  return (
    <div className="columnAlignment pageHeadingWrapper">
      <span className="alignSelfCenter pageHeading">{headingText}</span>
    </div>
  );
}

export default PageHeading;
