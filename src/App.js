import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NomborRawak from './components/NomborRawak';
import TextRawak from './components/TextRawak';
import Dadu from './components/Dadu';

function App() {

  const [active, setActive] = useState('nombor')

  return (
      <div className="container text-center">
        <h1 className="txtTitle">Rawak</h1>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                <a className={`nav-link ${active === 'nombor' ? "active" : ""}`} href="#" onClick={() => setActive('nombor')}>Nombor</a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${active === 'perkataan' ? "active" : ""}`}  href="#" onClick={() => setActive('perkataan')}>Perkataan</a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${active === 'dadu' ? "active" : ""}`}  href="#" onClick={() => setActive('dadu')}>Dadu</a>
                </li>
            </ul>
          </div>
        <div>
        { active === 'nombor' ? <NomborRawak/> : active === 'perkataan' ? <TextRawak/> : <Dadu/> }
        </div>
        </div>
      </div>
  );
}

export default App;
