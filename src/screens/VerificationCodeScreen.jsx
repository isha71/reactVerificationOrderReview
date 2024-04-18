import React, {useState} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Headline from "../components/Headline";
import Tagline from "../components/Tagline";
import VerificationCodeInput from "../components/VerificationCodeInput";
import { Link } from "react-router-dom";

function VerificationCodeScreen() {
  const [userContact, setUserContact] = useState("+xx xxxx xx88");
  return (
    <div className="columnAlignment sectionContainer alignSelfCenter">
      <span className="navIconWrapper">  
        <Link to="#">
          <ArrowBackIcon className="navIcon" />
        </Link>
      </span>
      <Headline headlineText={`Enter the 7-digit code we texted to ${userContact}`} />
      <Tagline taglineText="This extra step shows it's really you trying to sign in" />
      <VerificationCodeInput />
      <span className="accentButtonWrapper">
        <Link to="/help">
          <button className="accentButton accentTransparentButton">
            I need help
          </button>
        </Link>
      </span>
    </div>
  );
}

export default VerificationCodeScreen;
