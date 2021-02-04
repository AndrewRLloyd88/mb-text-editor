import React from 'react';
import Button from './Button';
import FontSelector from './FontSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
// Importing types from the API library along with other exports

import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faLink,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import ColorSelector from './ColorSelector';
import FontSizeSelector from './FontSizeSelector';
import LinkButton from './LinkButton';

interface Props {
  toggleHTML: () => void;
}

export default function Toolbar(props: Props) {
  return (
    <div className="toolbar">
      <Tooltip title="Bolds the selected text">
        <div>
          <Button id="Bold"></Button>
        </div>
      </Tooltip>

      <Tooltip title="Italicises the selected text">
        <div>
          <Button id="Italic"></Button>
        </div>
      </Tooltip>

      <Tooltip title="Underlines the selected text">
        <div>
          <Button id="Underline"></Button>
        </div>
      </Tooltip>

      <Tooltip title="Changes font of selected text">
        <div>
          <FontSelector />
        </div>
      </Tooltip>

      <Tooltip title="Changes size of selected text">
        <div>
          <FontSizeSelector />
        </div>
      </Tooltip>

      <Tooltip title="Justifies the current line or selection left">
        <div>
          <Button id="Justify-Left" icon={faAlignLeft}></Button>
        </div>
      </Tooltip>

      <Tooltip title="Center Justifies the current line or selection">
        <div>
          <Button id="Justify-Center" icon={faAlignCenter}></Button>
        </div>
      </Tooltip>

      <Tooltip title="Justifies the current line or selection right">
        <div>
          <Button id="Justify-Right" icon={faAlignRight}></Button>
        </div>
      </Tooltip>

      <Tooltip title="Changes the colour of the selected text">
        <div>
          <ColorSelector />
        </div>
      </Tooltip>

      <div className="btn-link-html">
        <Tooltip title="Allows you to add a hyperlink to the selected text">
          <div>
            <LinkButton id="Hyperlink" icon={faLink} />
          </div>
        </Tooltip>

        <Tooltip title="Toggles the visibility generated HTML on or off. (HTML will appear under editor)">
          <div>
            <button onClick={props.toggleHTML}>
              <FontAwesomeIcon icon={faCode} />
            </button>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
