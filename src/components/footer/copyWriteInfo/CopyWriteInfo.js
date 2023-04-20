import React from "react";
import { Link } from "react-router-dom";
import Apxor from "apxor";

const CopyWriteInfo = () => {
  const logPageEvent = (e, eventName) => {
    Apxor.logEvent(eventName);
  };
  return (
    <div className="copyWriteInfo__Container">
      <div className="copyWriteInfo">
        <Link to="#" onClick={(e) => logPageEvent(e, "PrivacyPolicyClicked")}>
          Privacy Policy
        </Link>{" "}
        <span> | </span>
        <Link to="#" onClick={(e) => logPageEvent(e, "CookiePolicyClicked")}>
          Cookie Policy
        </Link>{" "}
        <span> | </span>
        <Link to="#" onClick={(e) => logPageEvent(e, "TermsClicked")}>
          Terms
        </Link>
      </div>
      <p className="copyWriteInfo__company">Made with️ ❤️ by Web SDK Team</p>
    </div>
  );
};

export default CopyWriteInfo;
