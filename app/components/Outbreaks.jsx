import React from 'react';
import OutbreakReport from './OutbreakReport.jsx';

export default ({outbreaks}) => {
  return (
    <ul className="outbreaks">{outbreaks.map(outbreak =>
      <li key={outbreak.id} className="outbreak">
        <OutbreakReport outbreak={outbreak}/>
      </li>
    )}</ul>
  );
}
