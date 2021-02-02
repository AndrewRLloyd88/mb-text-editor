import React from 'react';
import Button from './Button';
import FontSelector from './FontSelector';
// Importing types from the API library along with other exports

import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import ColorSelector from './ColorSelector';
import FontSizeSelector from './FontSizeSelector';
import LinkButton from './LinkButton';

export default function Toolbar() {
  return (
    <div className="toolbar">
      <Button id="Bold"></Button>
      <Button id="Italic"></Button>
      <Button id="Underline"></Button>
      <FontSelector />
      <FontSizeSelector />
      <Button id="Justify-Left" icon={faAlignLeft}></Button>
      <Button id="Justify-Center" icon={faAlignCenter}></Button>

      <Button id="Justify-Right" icon={faAlignRight}></Button>
      <ColorSelector />
      <LinkButton id="Hyperlink" icon={faLink} />
    </div>
  );
}
