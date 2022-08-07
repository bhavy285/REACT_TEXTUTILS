import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleuperclick = () => {
    let newup = text.toUpperCase();
    setText(newup);
    props.showalert("Converted to Upper case!!!", "Success");
    // console.log("upper btn clicked " + newup);
  };
  const handlelowerclick = () => {
    let newlow = text.toLowerCase();
    setText(newlow);
    props.showalert("Converted to Lower case!!!", "Success");
    // console.log("low btn clicked " + newlow);
  };
  const handlecopy = () => {
    let newcopy = document.getElementById("inputtext");
    newcopy.select();
    navigator.clipboard.writeText(newcopy.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text is Copied!!!", "Success");
    // console.log("copy btn clicked " + newcopy);
  };
  const handleextraspaces = () => {
    let extraspace = text.split(/[ ]+/);
    setText(extraspace.join(" "));
    props.showalert("Extra spaces are removd!!!", "Success");
  };
  const handleonchange = (event) => {
    // console.log("text is changing");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = 'bhavy shah' // we can not change the value of text like this
  return (
    <>
      <div>
        <div
          className="mb-3"
          style={{
            color: props.mode === "dark" ? "blue" : "grey",

            fontFamily: "cursive",
          }}
        >
          <h1>{props.title}</h1>
          <div
            className="mb-3 container"
            style={{
              color: props.mode === "dark" ? "blue" : "red",
              backgroundColour: props.mode === "dark" ? "Grey" : "grey",
              fontFamily: "cursive",
            }}
          >
            <br />
            <textarea
              className="form-control" // here we have to give form-control
              name="inputtext"
              id="inputtext"
              rows="8"
              onChange={handleonchange}
              value={text}
              placeholder="Enter String here"
              style={{
                backgroundColour: props.mode === "dark" ? "red" : "grey",
                color: props.mode === "dark" ? "blue" : "grey",
              }}
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary"
            onClick={handleuperclick}
          >
            Upper
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handlelowerclick}
          >
            lower
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handlecopy}
          >
            copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleextraspaces}
          >
            extra spaces
          </button>
        </div>
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "blue" : "grey",
            backgroundColour: props.mode === "dark" ? "Grey" : "red",
            fontFamily: "cursive",
          }}
        >
          <h1>text summary</h1>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} chracters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes to read the text
          </p>
          <p>{text.length > 0 ? text : `Nothing to Preview`}</p>
        </div>
      </div>
    </>
  );
}

Textform.propTypes = {
  title: PropTypes.string.isRequired,
};
Textform.defaultProps = {
  title: "set title here",
};
