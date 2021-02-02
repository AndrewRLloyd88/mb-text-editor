import React from 'react';
import Button from './Button';
import FontSelector from './FontSelector';
// Importing types from the API library along with other exports

import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
} from '@fortawesome/free-solid-svg-icons';

// library.add(faAlignCenter, faAlignLeft, faAlignRight);

export default function Toolbar() {
  return (
    <div className="toolbar">
      <Button id="Bold"></Button>
      <Button id="Italic"></Button>
      <Button id="Underline"></Button>
      <FontSelector />
      <Button id="Justify-Left" icon={faAlignLeft}></Button>
      <Button id="Justify-Center" icon={faAlignCenter}></Button>

      <Button id="Justify-Right" icon={faAlignRight}></Button>
    </div>
  );
}
