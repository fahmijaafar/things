import React, { useState } from 'react'

function NomborRawak() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    const [result, setResult] = useState(0);
    const [showResult, setShowResult] = useState(false);

    function handleGetRandomNumber() {
        if(min >= max){
          alert("Error: Minimum number should be less than maximum number.");
        }else{
          let ans = Math.floor(Math.random() * (max - min + 1) + min);
          setResult(ans);
          setShowResult(true);
        }
      }

    return (
        <div className="card-body">
            <h5 className="card-title">Nombor Rawak</h5>
            <p className="card-text">Julat min:</p>
            <input type="number" id="minNo" onChange={e => setMin(e.target.value)} value={min} placeholder="0"/>
            <p className="card-text">Julat max:</p>
            <input type="number" id="maxNo" onChange={e => setMax(e.target.value)} value={max} placeholder="0"/><br/>
            <button onClick={handleGetRandomNumber} className="btn btn-primary mt-2">Dapatkan Nombor Rawak</button>
            <p className="txtResult">No Pilihan: {result}</p>
        </div>
    )
}

export default NomborRawak