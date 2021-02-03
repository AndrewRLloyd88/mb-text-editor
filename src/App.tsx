import React, { useRef, useState, useEffect } from 'react';
import Toolbar from './Toolbar';

type Props = {
  name: string;
};

const App = (props: Props) => {
  const content = useRef<HTMLDivElement | null>(null);
  const [currentHTML, setCurrentHTML] = useState('');
  const [docTitle, setDocTitle] = useState('untitled-document');
  const [savedAt, setSavedAt] = useState<String>();

  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Control') {
        if (content.current) {
          console.log(content);
          content.current.contentEditable = 'false';
        }
      }
    },
    false
  );

  document.addEventListener(
    'keyup',
    (event) => {
      if (event.key === 'Control') {
        if (content.current) {
          // when ctrl is released
          content.current.contentEditable = 'true';
        }
      }
    },
    false
  );

  const onChange = () => {
    if (content.current) {
      setCurrentHTML(content.current.innerHTML);
    }
  };

  //Save Function
  const saveDoc = () => {
    console.log(new Date().toString());
    setSavedAt(new Date().toString());
    localStorage[docTitle] = currentHTML;
  };

  const loadDocs = () => {
    const docs = Object.keys(localStorage);
    console.log(docs);
  };

  useEffect(() => {
    if (content.current) {
      setCurrentHTML(content.current.innerHTML);
    }
  }, [content.current]);

  return (
    <>
      <h1>MB-WYSIWYG Text Editor</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveDoc();
        }}
      >
        <input
          value={docTitle}
          onChange={(e) => {
            setDocTitle(e.target.value);
          }}
          placeholder="untitled-document"
          required={true}
        ></input>
        <button>Save</button>
        <p>
          {savedAt === undefined
            ? 'Unsaved'
            : `Document last saved at: ${savedAt}`}
        </p>
      </form>
      <button onClick={loadDocs}>Load</button>
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
