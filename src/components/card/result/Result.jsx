import { useState } from "react";
import Amount from "./amount/Amount";

function Result({ status }) {
  const [tipAmount, setTipAmount] = useState(3);
  const [totalAmount, setTotalAmount] = useState(5);

  function handleClick() {
    setTipAmount(0);
    setTotalAmount(0);
  }
  return (
    <div className="result-wrapper">
      <Amount amountLabel={"Tip Amount"} resultValue={tipAmount} />

      <Amount amountLabel={"Total"} resultValue={totalAmount} />
      <button
        className="reset-button"
        disabled={status === "empty"}
        onClick={handleClick}
      >
        Reset
      </button>
    </div>
  );
}

export default Result;
