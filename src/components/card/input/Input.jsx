import React, { useState } from "react";

function Input({ name, imgSrc, imgAltTxt }) {
  const [error, setError] = useState("");
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    if (value === "0") {
      setError("Can't be zero");
    } else {
      setError("");
    }
    switch (name) {
      case "bill":
        setBill(value);
        break;
      case "number-of-people":
        setPeople(value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="main-label-wrapper">
        <label className="main-label">{name}</label>
        {error ? <p className="error-msg">{error}</p> : null}
      </div>
      <br />

      <div
        className={
          error ? "main-input-wrapper error-msg-border" : "main-input-wrapper"
        }
      >
        <div className="main-image-container">
          <img className="bill-image" src={imgSrc} alt={imgAltTxt} />
        </div>
        <input
          type="number"
          name={name}
          value={name === "bill" ? bill : people}
          className="input-fields"
          placeholder="0"
          onInput={handleChange}
        ></input>
      </div>
    </>
  );
}

export default Input;
