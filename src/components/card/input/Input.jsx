import React, { useState } from "react";

function Input({ labelName, imgSrc, imgAltTxt }) {
  const [noOfPeople, setNoOfPeople] = useState(0);
  const [bill, setBill] = useState(0);

  function handleInput(e) {
    const inputName = e.target.getAttribute("name");

    if (inputName === "bill") {
      setBill(e.target.value);
    } else if (inputName === "number-of-people") {
      setNoOfPeople(e.target.value);
      if (bill !== 0 && )
    }

    
  }
  /* const [noOfPeople, setNoOfPeople] = useState("0");
  const [error, setError] = useState(false);

  function handleInput(e) {
    const inputName = e.target.getAttribute("name");

    if (inputName === "number-of-people") {
      setNoOfPeople(e.target.value);
      console.log(`no of people: ${noOfPeople}`);
    }

    if (noOfPeople === "0") {
      setError(true);
    } else {
      setError(false);
    }
  } */

  return (
    <>
      <label className="main-label">{labelName}</label>
      <br />

      <div
        className="main-input-wrapper"
        /* className={
          error ? "main-input-wrapper error-msg" : "main-input-wrapper"
        } */
      >
        <div className="main-image-container">
          <img className="bill-image" src={imgSrc} alt={imgAltTxt} />
        </div>
        <input
          type="text"
          name={labelName}
          className="input-fields"
          placeholder="0"
          onInput={handleInput}
        ></input>
      </div>
    </>
  );
}

export default Input;
