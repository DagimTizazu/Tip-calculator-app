import React, { useState } from "react";

function Input({ name, value, imgSrc, imgAltTxt, error, onChange }) {
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
          value={value}
          className="input-fields"
          placeholder="0"
          onInput={onChange}
        ></input>
      </div>
    </>
  );
}

export default Input;
