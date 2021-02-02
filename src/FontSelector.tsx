import React, { useState } from 'react';

export default function FontSelector() {
  const changeFont = (e) => {
    document.execCommand('fontName', false, e.target.value);
    console.log('font');
  };

  return (
    <select id="input-font" className="input" onChange={(e) => changeFont(e)}>
      <option value="Times New Roman" defaultValue="Times New Roman">
        Times New Roman
      </option>
      <option value="Arial">Arial</option>
      <option value="Calibri">Calibri</option>
      <option value="Comic Sans MS">Comic Sans MS</option>
    </select>
  );
}
