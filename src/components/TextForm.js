import React, { useState } from 'react';



export default function TextForm(props) {

    const [text, setText] = useState(""); // Initialize text state
    const [alert,setAlert] = useState(null)

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Text has Converted to UpperCase","success")
    };

    const handleLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Text has Converted to LowerCase","success")

    };

    const ClearText = () => {
        let newText = "";
        setText(newText);
        showAlert("Text has Cleared","success")

    };

    const Total_A = () => {
        let count = 0;
        for (let i of text.toLowerCase()) {
            if (i === "a") {
                count++;
            }
        }
        return count;
    };

    const handleText = (event) => {
        setText(event.target.value); // Capture user input
    };

    return (
        <div style={{color: props.mode === "dark" ? "white" : "black"}}>
            <div className="container ">
                <h1 className="my-2">{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control my-2" value={text} onChange={handleText} style={{backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode ==="dark"? "white" : "black"}} id="myBox" rows="3"/>
                </div>
                <button className="btn btn-primary my-2" onClick={handleUpCase}>Convert To UpperCase</button>
                <button className="btn btn-primary m-2" onClick={handleLoCase}>Convert To LowerCase</button>
                <button className="btn btn-primary m-2" onClick={ClearText}>Clear Text</button>
            </div>

            <div className="container">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
            </div>
            <div className="container">
                <h2>Total "a" in the text</h2>
                <p>{Total_A()}</p>
            </div>
        </div>
    );
}
