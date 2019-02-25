import React from 'react';
import { getColors } from '../../helpers/colors';
import './Report.css'

const Report = () => {
  const colors = getColors();
  const rows = [];
  for (let [key, value] of Object.entries(colors)) {
    rows.push(
      <div className="container" key={key}>
        <span className="color">{key}</span>
        <span className="count">{value}</span>
      </div>
    );
  }
  return (
    <div className="report">
      {rows}
    </div>
  );
}

export default Report;