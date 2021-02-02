import React, { useRef, useState, useEffect } from 'react';
import Toolbar from './Toolbar';

type Props = {
  name: string;
};

const App = (props: Props) => {
  const content = useRef<HTMLDivElement | null>(null);
  const [currentHTML, setCurrentHTML] = useState('');
  const [userSelection, setSelection] = useState('');
  const renderToString = () => {};

  const onChange = () => {
    if (content.current) {
      console.log(content.current);
      console.log(content.current);
      setCurrentHTML(content.current.innerHTML);
      console.log(currentHTML);
    }
  };

  useEffect(() => {
    const el = content.current?.innerHTML;
    console.log(el);
    console.log(userSelection);
  }, [userSelection]);

  return (
    <>
      <h1>Wysiwyg Text Editor</h1>
      <Toolbar />
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
