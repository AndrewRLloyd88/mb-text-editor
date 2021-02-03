import React, { useRef, useState, useEffect } from 'react';
import Toolbar from './Toolbar';
import Modal from './Modal';

interface Props {
  name: string;
}

const App = (props: Props) => {
  const content = useRef<HTMLDivElement>(null);
  const [currentHTML, setCurrentHTML] = useState('');
  const [docTitle, setDocTitle] = useState('untitled-document');
  const [savedAt, setSavedAt] = useState<String>();
  const [userDocs, setUserDocs] = useState<String[]>([]);
  const [show, setShow] = useState(true);

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

  //Gets Users Docs from localstorage
  const loadDocs = () => {
    const docs = Object.keys(localStorage);
    setUserDocs(docs);
    setShow(!show);
  };

  //changes docs based on load button in modal
  const changeDocs = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const doc = e.currentTarget.id;
    const html: string = localStorage.getItem(doc)!;
    console.log(html);
    setCurrentHTML(html);
    setDocTitle(doc);
    if (content.current) {
      content.current.innerHTML = html;
    }
    setShow(!show);
  };

  //used for the back button in the modal
  const setHidden = () => {
    setShow(!show);
  };

  useEffect(() => {
    const docs = Object.keys(localStorage);
    setUserDocs([...docs]);
    console.log(userDocs);
    if (content.current) {
      setCurrentHTML(content.current.innerHTML);
    }
  }, [docTitle]);

  return (
    <>
      <h1>MB-WYSIWYG Text Editor</h1>
      <Modal
        show={show}
        userDocs={userDocs}
        hide={setHidden}
        changeDocs={(e) => changeDocs(e)}
      />
      <div className="file-mgr">
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
      </div>
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
