import React from "react";
import { Link } from "react-router-dom";

function FooterInfo({ text, linkText, underline }) {
  return (
    <div className="columnAlignment footerInfoWrapper">
      <span>
        {text}&nbsp;
        {underline ? (
          <span className="underline">
              <Link to="#">{linkText}</Link>
          </span>
        ) : (
          <span>
            <Link to="#">{linkText}</Link>
          </span>
        )}
      </span>
    </div>
  );
}

export default FooterInfo;
