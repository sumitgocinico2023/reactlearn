import React, {useState} from 'react';



export default function TextForm(props) {



const handleUpClick = () => {
    let result = text.toUpperCase();
    setText(result);
} 

const handleOnChange = (event) => {
    setText(event.target.value);
} 

const handleUpClear = () => {
    let resultClear = '';
    setText(resultClear);
}    

const [text, setText] = useState('');
//   setText ("New Text");  
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8" placeholder={props.placeholder}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary' onClick={handleUpClear} >Clear Text</button>
        </div>

        <div className='container my-5'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>     
    </>
  );
}


TextForm.defaultProps = {
    placeholder : 'Set Content Here'
}