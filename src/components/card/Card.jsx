import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Dollar from "../../assets/icon-dollar.svg";
import Person from "../../assets/icon-person.svg";
import Input from "./input/Input";
import Result from "./result/Result";

function Card({ status }) {
  const [selectedTip, setSelectedTip] = useState(0);

  const buttonValues = [5, 10, 15, 25, 50];

  function handleClick(e) {
    setSelectedTip(e.target.value);
  }

  return (
    <main>
      <img className="logo" src={Logo} alt="logo" />
      <div className="main__wrapper">
        <Input labelName="bill" imgSrc={Dollar} imgAltTxt="dollar sign" />

        <div className="select-tip-btns-container">
          <label className="main-label">Select Tip %</label>
          <div className="button-wrapper">
            {buttonValues.map((btn) => (
              <button
                key={btn}
                value={btn}
                className={
                  selectedTip === btn
                    ? "selected-tip-button tip-button"
                    : "tip-button"
                }
                onClick={handleClick}
              >
                {btn}%
              </button>
            ))}
            <input
              className="custom-input"
              type="number"
              placeholder="Custom"
            />
          </div>
        </div>

        <Input
          labelName="number-of-people"
          imgSrc={Person}
          imgAltTxt="person icon"
        />

        <Result status={status} />
      </div>
    </main>
  );
}

export default Card;
