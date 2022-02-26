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

  const changeToLowerCase = () => {
    console.log("Changed to lower case");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">

        <form>
          <div className="form-group">
            <label htmlFor="text-area" className="text-area-heading">{props.heading}</label>
            <textarea className="form-control" id="text-area" rows="3" value={text} onChange={onChangeHandler}></textarea>
          </div>
        </form>

        <button className="btn btn-primary text-area-btn mx-2" onClick={changeToUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary text-area-btn mx-2" onClick={changeToLowerCase}>Convert to LowerCase</button>
      </div>

      <div className="container">
        <h3>Summary</h3>
        <p> <span className='word-charcter-count-bg'>Words-{text.split(" ").length}</span> & <span className='bg-green'>Characters-{text.length}</span></p>


      </div>

    </>
  )
}
