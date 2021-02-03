import React from 'react';

export default function FontSelector() {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    changeFont(value);
  };

  const changeFont = (e: string) => {
    document.execCommand('fontName', false, e);
    console.log('font');
  };

  return (
    <select id="input-font" className="input" onChange={(e) => handleChange(e)}>
      <option value="Times New Roman" defaultValue="Times New Roman">
        Times New Roman
      </option>
      <option value="Arial">Arial</option>
      <option value="Calibri">Calibri</option>
      <option value="Comic Sans MS">Comic Sans MS</option>
    </select>
  );
}
