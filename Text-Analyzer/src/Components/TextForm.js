import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter your Text");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const convertToUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
  };

  const convertToLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  };

  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra white space removed", "success");
  };

  return (
    <>
      <div className={`container mt-4 bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'} rounded p-4`} data-bs-theme={props.mode}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="MyBox" value={text} rows="8" onChange={handleChange}></textarea>
        </div>
        <div className="d-flex flex-wrap">
          <button className="btn btn-primary m-2" onClick={convertToUpper}>Convert to Upper Case</button>
          <button className="btn btn-primary m-2" onClick={convertToLower}>Convert to Lower Case</button>
          <button className="btn btn-primary m-2" onClick={() => { setText(''); props.showAlert('Text Cleared', "success"); }}>Clear Text</button>
          <button className="btn btn-primary m-2" onClick={removeSpaces}>Remove Extra Spaces</button>
          <button type="button" className="btn btn-secondary m-2" onClick={copy}>
            <i className="ri-clipboard-line"></i> Copy Text
          </button>
        </div>
      </div>

      <div className={`container mt-4 bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'} rounded p-4`} data-bs-theme={props.mode}>
        <h2 className="mb-3">Your Text Summary</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Words</th>
              <th scope="col">Characters</th>
              <th scope="col">Spaces</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{text.length > 0 ? text.trim().split(/\s+/).length : "0"}</td>
              <td>{text.replace(/\s+/g, "").length}</td>
              <td>{text.length - text.replace(/\s/g, "").length}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">Sentences</th>
              <th scope="col">Paragraphs</th>
              <th scope="col">Punctuations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{text.split(".").length - 1}</td>
              <td>{text.split('\n').length - 1}</td>
              <td>{(text.split(',').length - 1) + (text.split(':').length - 1)}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">Slow Reading</th>
              <th scope="col">Average Reading</th>
              <th scope="col">Fast Reading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{(text.trim().split(/\s+/).length * 0.007).toFixed(2)}{' min'}</td>
              <td>{(text.trim().split(/\s+/).length * 0.008).toFixed(2)}{' min'}</td>
              <td>{(text.trim().split(/\s+/).length * 0.009).toFixed(2)}{' min'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={`container mt-4 bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'} rounded p-4`} data-bs-theme={props.mode}>
        <h2>Preview</h2>
        <p className='border p-3'>{text.length > 0 ? text : 'Enter text to Preview here'}</p>
      </div>
    </>
  );
}
