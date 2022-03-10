import React, { useState } from 'react'
import "./css/textArea.css";
import Navbar from './Navbar';


export default function TextArea(props) {
  const abc = document.getElementById("abc");
  console.log(abc);


  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  }

  const changeToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const changeToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className='content'>
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
          <p> <span className='word-charcter-count-bg'>Words-{text.split(" ").length}</span> & <span className='word-charcter-count-bg'>Characters-{text.length}</span></p>


        </div>
      </div>



    </>
  )
}
