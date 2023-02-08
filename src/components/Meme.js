import React, { useState, useEffect } from "react";
import '../App.css';

const Meme = () => {
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://meme-api.com/gimme");
      const json = await result.json();
      setMeme(json);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setMeme(null);
    const fetchData = async () => {
      const result = await fetch("https://meme-api.com/gimme");
      const json = await result.json();
      setMeme(json);
    };
    fetchData();
  };

  return (
    <div className="card-body">
      {meme ? (
        <div>
          <img class="imgMeme" src={meme.url} alt={meme.title} />
          <p>{meme.title}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button className="btn btn-primary mt-2" onClick={handleClick}>Lagi dan Lagi</button>
    </div>
  );
};

export default Meme;
