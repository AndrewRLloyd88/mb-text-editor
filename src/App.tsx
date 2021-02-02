import React, { useRef, useState } from 'react';
import Toolbar from './Toolbar';

type Props = {
  name: string;
};

const App = (props: Props) => {
  const content = useRef<HTMLDivElement | null>(null);
  const [currentHTML, setCurrentHTML] = useState('');

  const onChange = () => {
    if (content.current) {
      setCurrentHTML(content.current.innerHTML);
    }
  };

  return (
    <>
      <h1>MB-WYSIWYG Text Editor</h1>
      <Toolbar />
      <div
        ref={content}
        className="editor"
        contentEditable="true"
        spellCheck="true"
        onInput={onChange}
        suppressContentEditableWarning={true}
      >
        <p>Start typing here to create your own document.</p>
      </div>
      <div>{currentHTML}</div>
    </>
  );
};

export default App;
