import React, { useState } from 'react';
import ColorForm from './components/Form/Form';
import Report from './components/Report/Report';
import { getColors } from './helpers/colors';
import './App.css'

const App = () => {
  const [view, setView] = useState('form');
  const colors = getColors();
  return (
    <div>
      <div className="header">
        <button
          id="formBtn"
          className={`headerBtn ${view === 'form' && 'active'}`}
          onClick={() => setView('form')}
        >
          Form
        </button>
        <button
          id="reportBtn"
          className={`headerBtn ${view === 'report' && 'active'}`}
          onClick={() => setView('report')}
          disabled={!colors}
        >
          Report
        </button>
      </div>
      {view === 'form' && <ColorForm setView={setView} />}
      {view === 'report' && <Report />}
    </div>
  );
}

export default App;
