import React, { useState } from 'react';

export default function ColorSelector() {
  const [color, setColor] = useState('#000000');

  const handleChange = (e) => {
    setColor(e.target.value);
    changeColor();
  };

  const changeColor = () => {
    document.execCommand('foreColor', false, color);
  };

  return (
    <div>
      <input
        type="color"
        id="favcolor"
        name="favcolor"
        value={color}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
