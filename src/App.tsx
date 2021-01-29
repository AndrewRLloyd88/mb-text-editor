import * as React from 'react';
import Button from '@material-ui/core/Button';

function App(props: any) {
  const { name } = props;
  return (
    <>
      <h1>Wysiwyg Text Editor</h1>
      <Button variant="contained">
        <b>B</b>
      </Button>
      <div className="editor" contentEditable="true">
        <p>Edit this content to add your own quote</p>
      </div>
    </>
  );
}

export default App;
