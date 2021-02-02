import React from 'react';
import Button from './Button';

export default function Toolbar() {
  return (
    <div className="toolbar">
      <Button id="Bold"></Button>
      <Button id="Italic"></Button>
      <Button id="Underline"></Button>
    </div>
  );
}
