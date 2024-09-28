import React from "react";

function CountryFlag({ language, flag }) {
  return (
    <img
      className="btn-img"
      src={flag}
      alt={`Change la langue à ${language}`}
    />
  );
}
export default CountryFlag;


