import React from "react";

const GetInspireLink = ({ contentType, title }) => {
  return (
    <div className="getInspireLink">
      <p>{contentType}</p>
      <a href="#">{title}</a>
    </div>
  );
};

export default GetInspireLink;
