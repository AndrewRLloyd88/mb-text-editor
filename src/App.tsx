import React, { useRef, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  name: string;
};

const App = (props: Props) => {
  const content = useRef<HTMLDivElement | null>(null);
  const [currentHTML, setCurrentHTML] = useState('');
  const renderToString = () => {};

  const onChange = () => {
    if (content.current) {
      setCurrentHTML(content.current.innerHTML);
      console.log(currentHTML);
    }
  };

  const handleClick = () => {
    let selection = window.getSelection()?.anchorNode?.textContent;
    const startIndex = window.getSelection()?.anchorOffset;
    const endIndex = window.getSelection()?.focusOffset;
    //typescript is preventing an error here??
    if (startIndex && endIndex) {
      selection = selection?.substr(startIndex, endIndex - startIndex);
      console.log(selection);
      console.log(props.name);
    }
  };

  useEffect(() => {
    const el = content.current?.innerHTML;
    console.log(el);
  }, []);

  return (
    <>
      <h1>Wysiwyg Text Editor</h1>
      <div className="toolbar">
        <Button onClick={handleClick} variant="contained">
          <b>B</b>
        </Button>
      </div>
      <div
        className="editor"
        contentEditable="true"
        spellCheck="true"
        onChange={onChange}
        suppressContentEditableWarning={true}
      >
        <p ref={content}>Edit this content to add your own quote</p>
      </div>
    </>
  );
};

export default App;
