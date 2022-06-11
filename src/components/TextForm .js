import PropTypes from "prop-types";
import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    var newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowerClick = () => {
    var newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleAddSpace = () => {
    var newtext = "";
    for (var i = 0; i < text.length; i++) {
      newtext = newtext + text[i] + " ";
    }
    setText(newtext);
  };
  const handleRemoveSpace = () => {
    var newtext = "";
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        newtext = newtext + text[i];
      }
    }
    setText(newtext);
  };

  const [text, setText] = useState("");

  const handleCopy = async () => {
    var text_area = document.getElementById("text-area");
    await navigator.clipboard.writeText(text_area.value);
    document.getElementById("msg").innerHTML= '<div id="copied" class="alert alert-success alert-dismissible success show" role="alert" style=(display:none;) ><strong>Text Copied</strong> <button type="button" id="close_btn" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    setTimeout(() => {
      document.getElementById("msg").innerHTML=" ";
    }, 2000);
  };

  var textLength = text.split(" ").length;
  if (text.endsWith(" ") === true) {
    textLength = textLength - 1;
  }

  if (text.split(" ").length === 1 && text.endsWith(" ") !== true) {
    textLength = 1;
  }
  if (text.endsWith(" ") !== true) {
    textLength = textLength - 1 + 1;
  }
  if (text.split(" ").length === 1 && text.endsWith("") === true) {
    textLength = textLength - 1;
  }
  const readLoud = () => {
    if ("speechSynthesis" in window) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      document.getElementById("stopbtn").style.display = "inline";
    } else {
      alert("Your browser doesnot support this feature");
    }
  };
  const stopRead = () => {
    window.speechSynthesis.cancel();
    document.getElementById("stopbtn").style.display = "none";
  };
 
  var read_time = Math.round(textLength * 1.3);
  if (text.length === 0 || textLength === 0) {
    read_time = 0;
  }

  return (
    <>
      <div className="msg" id="msg">
      
      </div>
      <div className="container">
        <h2
          className="form-heading"
          style={{ color: props.mode === "light" ? "rgb(40,40,40)" : "white" }}
        >
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control border border-primary"
            id="text-area"
            rows="6"
            value={text}
            style={{
              color: props.mode === "light" ? "rgb(40,40,40)" : "white",
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(20,20,20)",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="btns">
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary" onClick={handleLowerClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary" onClick={handleAddSpace}>
            Add space
          </button>
          <button className="btn btn-primary" onClick={handleRemoveSpace}>
            Remove space
          </button>
          <button
            className="btn btn-primary"
            id="liveAlertBtn"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="container my-3">
          <h3
            className="summary"
            style={{
              color: props.mode === "light" ? "rgb(40,40,40)" : "white",
            }}
          >
            Text's summary:
          </h3>
          <p
            style={{
              marginLeft: "10%",
              color: props.mode === "light" ? "rgb(40,40,40)" : "white",
            }}
          >
            Words : {textLength}
            <br></br>
            Characters : {text.length}
            <br />
            Approximate time to read : {read_time} seconds
          </p>
        </div>
        <div className="container my-4">
          <button
            id="read"
            className="btn btn-primary"
            style={{ marginLeft: "10%" }}
            onClick={readLoud}
          >
            Read Aloud
          </button>

          <button
            id="stopbtn"
            className="btn btn-primary"
            style={{ marginLeft: "10px", display: "none" }}
            onClick={stopRead}
          >
            Stop
          </button>
        </div>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Text",
};
export default TextForm;
