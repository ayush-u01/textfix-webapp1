import React,{ useState } from 'react'


export default function Textform(props) {
    const [Text, setText] = useState('');

    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked " + Text);
        let newtext=Text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase", "Success");
    }

    const handleLoClick = ()=>{
        console.log("Lowercase was Clicked " + Text);
        let newtext=Text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase", "Success");
    }

    const handleClearClick = ()=>{
        console.log("Clear text was Clicked ");
        let newtext='';
        setText(newtext);
        props.showAlert("Text is Cleared", "Success");

    }

    const handleExtraSpaces = ()=>{
        console.log(" Clear Space was Clicked ");
        let newtext= Text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Space Removed", "Success");

    }

    const handleCopy = ()=>{
        console.log("text copied");
        var text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "Success");

        
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    return (
        <>
        <div className={`container text-${props.mode==='light'? 'grey':'light'} bg-${props.mode}`} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className={`form-control text-${props.mode==='light'? 'grey':'light'}`} value= {Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'rgb(20 13 24)':'white'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extraspace</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>

        </div>
        <div className={`container my-3" text-${props.mode==='light'? 'dark':'light'} bg-${props.mode}`} >
            <h2>Your text summary</h2>
            <p>{Text.length===0?0: Text.split(" ").length} words {Text.length} letters</p>
            <p> {0.008 * Text.split(" ").length} minutes to Read </p>

            <h3>Preview</h3>
            <p>{Text.length>0? Text : "Enter text above to Preview "}</p>
            

        </div>


        


        </>

    )
}    