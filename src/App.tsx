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
      console.log(content.current);
      console.log(content.current);
      setCurrentHTML(content.current.innerHTML);
      console.log(currentHTML);
    }
  };

  const handleClick = () => {
    //it would make sense to pass a type in and a switch case

    //get the current selection
    let selection = window.getSelection()?.anchorNode?.textContent;
    const startIndex = window.getSelection()?.anchorOffset;
    const endIndex = window.getSelection()?.focusOffset;
    //typescript is preventing an error here??
    if (startIndex && endIndex) {
      selection = selection?.substr(startIndex, endIndex - startIndex);
      console.log(selection);
    }

    //do stuff in a switch case here
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
        ref={content}
        className="editor"
        contentEditable="true"
        spellCheck="true"
        onInput={onChange}
        suppressContentEditableWarning={true}
      >
        <p>Edit this content to add your own quote</p>
      </div>
      <div>{currentHTML}</div>
    </>
  );
};

export default App;
