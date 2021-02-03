import React from 'react';

export default function Modal() {
  return (
    <div className="modal" hidden={true}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">FileName</th>
            {/* <th scope="col">Long URL</th>
            <th scope="col">Date Created</th>
            <th scope="col">TinyURL Uses</th>
            <th scope="col">TinyURL Views</th>
            <th scope="col">Edit</th> */}
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
