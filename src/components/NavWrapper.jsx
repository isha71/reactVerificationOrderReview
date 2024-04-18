import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PageHeading from "../components/PageHeading";

function NavWrapper() {
  return (
    <div className="rowAlignment">
      <span className="navIconWrapper">
        <ArrowBackIcon className="navIcon" />
      </span>
      <PageHeading headingText="Order Preview" />
    </div>
  );
}

export default NavWrapper;
