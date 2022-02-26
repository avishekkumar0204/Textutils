import React, { useState } from 'react'
import "./css/textArea.css";


export default function TextArea(props) {

  const onChangeHandler = (event) => {
    console.log("On change hanlder");
    setText(event.target.value);
  }

  const changeToUpperCase = () => {
    console.log("Changed to upper case");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">

        <form>
          <div className="form-group">
            <label htmlFor="text-area" className="text-area-heading">{props.heading}</label>
            <textarea className="form-control" id="text-area" rows="3" value={text} onChange={onChangeHandler}></textarea>
          </div>
        </form>

        <button className="btn btn-primary text-area-btn" onClick={changeToUpperCase}>Convert to Uppercase</button>
      </div>

    </>
  )
}
