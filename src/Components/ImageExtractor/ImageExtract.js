import { useState, useRef } from "react";
import Tesseract from "tesseract.js";

export default function ImageExe() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="App">
      <main className="App-main">
        <h3>Actual image uploaded</h3>
        <img src={imagePath} className="App-logo" alt="logo" />

        <h3>Extracted text</h3>
        <div className="text-box">
          <p> {text} </p>
        </div>
        <input type="file" onChange={handleChange} />
      </main>
    </div>
  );
}
