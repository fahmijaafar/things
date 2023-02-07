import React, { useState } from 'react';

function TextRawak() {
  const [strings, setStrings] = useState([]);
  const [selectedString, setSelectedString] = useState("");

  function handleInput(e) {
    setStrings(e.target.value.split(','));
  }

  function handleClick() {
    if (!strings.length) return;
    const randomIndex = Math.floor(Math.random() * strings.length);
    setSelectedString(strings[randomIndex]);
  }

  return (
    <div className="card-body">
        <h5 className="card-title">Perkataan Rawak</h5>
        <p className="card-text">Letakkan beberapa perkataan dipisahkan dengan tanda koma:</p>
        <input type="text" onChange={handleInput} placeholder="Ali, Ah Cheng, Amarjit" /><br/>
        <button className="btn btn-primary mt-2" onClick={handleClick}>Dapatkan Perkataan Rawak</button><br/>
        <p>Perkataan pilihan: {selectedString}</p>
    </div>
  );
}

export default TextRawak;