import React from "react";
import Amount from "./amount/Amount";

function Result({ status }) {
  return (
    <div className="result-wrapper">
      <Amount amountLabel={"Tip Amount"} resultValue={"0"} />

      <Amount amountLabel={"Total"} resultValue={"0"} />
      <button className="reset-button" disabled={status === "empty"}>
        Reset
      </button>
    </div>
  );
}

export default Result;
