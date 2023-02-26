import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase","success")
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase","success")
  };
  const handleClearClick = () => {
    console.log("Lowercase was clicked" + text);
    const newText = (" ");
    setText(newText);
    props.showAlert("Cleared","success")
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
    
  };
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container" style = {{color : props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            rows="10"
            onChange={handleOnChange}
            style = {{background : props.mode==='light'?'white':'grey',color : props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3" style = {{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary </h1>
        <p>{text.split(' ').length} words , {text.length} charcters</p>
        <p>{0.008 * text.split(' ').length} Minutes to read this text</p>
        <h2> Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
