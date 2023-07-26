import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppoercase on Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = () => {
        // console.log("Uppoercase on Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("Uppoercase on Clicked" + text)
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText("hello");
    return (
        <div>
            <>
                <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="my-box" rows="8"></textarea>
                    <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-success mt-3 ms-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-warning mt-3 ms-2" onClick={handleClearClick}>Clear Text</button>
                </div>
                <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2>your text summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                </div>
            </>
        </div>
    )
}
