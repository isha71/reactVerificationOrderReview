import React, {useState} from "react";
import NavWrapper from "../components/NavWrapper";
import OrderPreviewTitleValueWrapper from "../components/OrderPreviewTitleValueWrapper";
import FooterInfo from "../components/FooterInfo";
import { Link, useSearchParams } from "react-router-dom";

function OrderPreviewScreen() {
  const [orderValues, setOrderValues] = useState({
    maticPrice: "SGD 2.17",
    paymentMethod: "Dbs Bank Ltd",
    coinbaseFee: "SGD 1.49",
    total: "SGD 20.00",
  });
  return (
    <div className="columnAlignment sectionContainer alignSelfCenter">
      <NavWrapper />
      <div className="columnAlignment maticWrapper alignSelfCenter">
        <span>8.52889997 MATIC</span>
      </div>
      <hr />
      <div className="columnAlignment orderPreviewContainer">
        <OrderPreviewTitleValueWrapper title="MATIC price" value={orderValues.maticPrice} />
        <OrderPreviewTitleValueWrapper title="Payment method" value={orderValues.paymentMethod} />
        <OrderPreviewTitleValueWrapper
          title="Coinbase fee"
          value={orderValues.coinbaseFee}
          icon={true}
        />

        <OrderPreviewTitleValueWrapper title="Total" value={orderValues.total} />
      </div>
      <div className="columnAlignment">
        <FooterInfo
          text="Processed by"
          linkText="Coinbase UK, Lrd."
          underline="true"
        />
        <FooterInfo
          text="ProCrypto markets are unique."
          linkText="Learn more"
        />
      </div>
      <span style={{ flex: "1 1 auto" }}></span>
      <hr style={{ margin: "8px 0 18px 0" }} />

      <span className="accentButtonWrapper">
        <Link to="/buy">
          <button className="accentButton">Buy now</button>
        </Link>
      </span>
    </div>
  );
}

export default OrderPreviewScreen;
