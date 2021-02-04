import React, { useState } from 'react';

export default function ColorSelector() {
  const [color, setColor] = useState('#000000');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        style={{ height: '26px' }}
        name="favcolor"
        value={color}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
