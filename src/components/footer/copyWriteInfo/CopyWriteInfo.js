import React from "react";
import { Link } from "react-router-dom";
const CopyWriteInfo = () => {
  return (
    <div className="copyWriteInfo__Container">
      <div className="copyWriteInfo">
        <Link to="#">Privacy Policy</Link> <span> | </span>
        <Link to="#">Cookie Policy</Link> <span> | </span>
        <Link to="#">Terms</Link>
      </div>
      <p className="copyWriteInfo__company">Made with️ ❤️ by Ravi</p>
    </div>
  );
};

export default CopyWriteInfo;
