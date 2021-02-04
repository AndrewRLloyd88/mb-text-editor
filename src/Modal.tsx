import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';

import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
  show: boolean;
  userDocs: String[];
  hide: () => void;
  changeDocs: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Modal(props: Props) {
  const files = props.userDocs.map((doc, idx) => {
    return (
      <tr>
        <td key={idx}>{doc}</td>
        <td key={idx + 100}>
          <Tooltip title={`Load ${doc} `}>
            <button
              className="loadbutton"
              onClick={(e) => {
                props.changeDocs(e);
              }}
              id={`${doc}`}
            >
              Load
            </button>
          </Tooltip>
        </td>
      </tr>
    );
  });
  return (
    <div className="modal" hidden={props.show}>
      <button onClick={props.hide}>Back</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Load a file</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{files}</tbody>
      </table>
      <Tooltip title="Go back to editor">
        <button onClick={props.hide}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </button>
      </Tooltip>
    </div>
  );
}
