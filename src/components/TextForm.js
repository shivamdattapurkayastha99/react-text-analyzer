import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);

        // setText("You have clicked on upclick");

    }
    const handleLowClick=()=>{
        console.log("Lower case was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);

        // setText("You have clicked on upclick");

    }
    const clearText=()=>{
        console.log("Lower case was clicked"+text);
        let newText='';
        setText(newText);

        // setText("You have clicked on upclick");

    }
    
    const handleOnChange=(event)=>{
        console.log("Onchange");
        setText(event.target.value);

    }
    const[text,setText] =useState('');
    // setText=("shivam asfdfdg");

    return (
        <>
        <div className="container">
            <div className="form-group my-3">
    <label htmlFor="myBox"><h1>{props.heading} </h1> </label>
    <textarea className="form-control" id="myBox" name="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
  
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert To Upper Case </button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert To Lower Case </button>
  
  <button className="btn btn-primary my-3 " onClick={clearText}>Clear Text  </button>
  </div>
        </div>
        <div className="container my-2">
            <h1>Your text summary</h1>
            <p>{text.split(' ').length} words {text.length} chars</p>
            <p>{0.008*text.split(' ').length} minutes read </p>
            <h2>Preview </h2>
            <p>{text}</p>
        </div>
        </>
            )
            
}
