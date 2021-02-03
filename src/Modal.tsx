import React from 'react';

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
          <button
            onClick={(e) => {
              props.changeDocs(e);
            }}
            id={`${doc}`}
          >
            Load
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="modal" hidden={props.show}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Filename</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{files}</tbody>
        <tbody>
          <tr>
            <td></td>
            <td>
              <button onClick={props.hide}>Back</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
