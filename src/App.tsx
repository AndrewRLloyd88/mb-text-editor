import React, { useRef, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

function App(props: any) {
  const { name } = props;
  const content = useRef<HTMLDivElement>(null);
  const renderToString = () => {};

  useEffect(() => {
    const el: any = content.current;
    console.log(el.innerHTML);
  }, []);

  return (
    <>
      <h1>Wysiwyg Text Editor</h1>
      <div className="toolbar">
        <Button variant="contained">
          <b>B</b>
        </Button>
      </div>
      <div
        className="editor"
        contentEditable="true"
        spellCheck="true"
        suppressContentEditableWarning={true}
      >
        <p ref={content}>Edit this content to add your own quote</p>
      </div>
    </>
  );
}

export default App;
