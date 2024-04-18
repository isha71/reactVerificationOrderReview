import React from "react";
import InfoIcon from "@mui/icons-material/Info";

function OrderPreviewTitleValueWrapper({ title, value, icon }) {
  return (
    <div className="rowAlignment orderPreviewSingleWrapper justifySpaceBetween">
      {icon ? (
        <div className="rowAlignment">
          <div className="columnAlignment">
            <span className="title">{title}</span>
            <span className="smallText">Includes taxes</span>
          </div>

          <InfoIcon />
        </div>
      ) : (
        <span className="title">{title}</span>
      )}

      <span className="value">{value}</span>
    </div>
  );
}

export default OrderPreviewTitleValueWrapper;
