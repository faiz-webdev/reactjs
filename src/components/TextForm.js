import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase();

    setText(newText);

    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();

    props.showAlert("Copied to clipboard!", "success");
  };

  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyText}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeSpace}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((el) => el.length !== 0).length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((el) => el.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
