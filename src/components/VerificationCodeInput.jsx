import React, { useState } from "react";

function VerificationCodeInput() {
  const [verificationCode, setVerificationCode] = useState("");
  const [isValid, setIsValid] = useState(true);
  

  function handleChange(e) {
    e.preventDefault();
    const inputValue = e.target.value;
    setVerificationCode(inputValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValidCount = verificationCode.length === 7;
    const isValidFormat = /^\d+$/.test(verificationCode);
    if (isValidCount && isValidFormat) {
      console.log(verificationCode);
      // send verification code to backend (for that we can use axios)
      // if (backend sends success message){
      //     Navigate("nextPage")
      //   else{
      //     Navigate("/")
      //     setVerificationCode("");
      //   }
      // }
    } else {
      setIsValid(false);
      setVerificationCode("");
    }
  }

  return (
    <div className="columnAlignment" style={{ flex: "1 1 auto" }}>
      <form
        onSubmit={handleSubmit}
        className="formWrapper columnAlignment"
        style={{ flex: "1 1 auto" }}
      >
        <div className="columnAlignment" style={{ flex: "1 1 auto" }}>
          <input
            className="inputField transparentButton"
            type="text"
            value={verificationCode}
            placeholder="Enter code"
            onChange={handleChange}
            maxLength={7}
            //   pattern="[0-9]{7}"
            required
          />
          {!isValid && (
            <p className="errorMessage">
              Invalid input. Please enter correct 7 digits code.
            </p>
          )}
        </div>
        <button type="submit" className="accentButton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default VerificationCodeInput;
