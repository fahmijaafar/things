import React, { useState } from "react";

function Dadu() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [result, setResult] = useState(0);

  const handleDiceNumberChange = (event) => {
    setDiceNumber(event.target.value);
  };

  const handleRollDice = () => {
    let total = 0;
    for (let i = 0; i < diceNumber; i++) {
      total += Math.floor(Math.random() * 6) + 1;
    }
    setResult(total);
  };

  return (
    <div className="card-body">
      <h5 className="card-title">Dadu</h5>
      <p className="card-text">Jumlah Dadu:</p>
      <input type="number" value={diceNumber} onChange={handleDiceNumberChange}/><br/>
      <button className="btn btn-primary mt-2" onClick={handleRollDice}>Lemparkan Dadu</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Dadu;
