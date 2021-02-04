import React, { useRef, useState, useEffect } from 'react';
import Toolbar from './Toolbar';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';

import {
  faCircleNotch,
  faSave,
  faFolderOpen,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

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
  const [showSpinner, setShowSpinner] = useState(true);
  const [savedOK, setSavedOK] = useState(false);
  const [showHTML, setShowHTML] = useState(true);
  const body = document.querySelector('body');
  const container = document.querySelector('.container');

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

  const createNewDoc = () => {
    if (localStorage.getItem('untitled-document')) {
      let docCount = 0;
      //check to see how many keys have untitled-document in local storage
      console.log('true');
      let docNames = Object.keys(localStorage);
      console.log(docNames);
      //increment that count by 1
      const freq = docNames.filter((doc) => {
        return doc.indexOf('untitled-document') === 0;
      });
      docCount = freq.length + 1;
      console.log(docCount);
      const doc = 'untitled-document' + 0 + docCount;
      console.log(doc);
      const html: string =
        '<p>Start typing here to create your own document.</p>';
      setCurrentHTML(html);
      setDocTitle(doc);
      if (content.current) {
        content.current.innerHTML = html;
      }
    }
  };

  //Save Function
  const saveDoc = () => {
    setSavedOK(true);
    setShowSpinner(true);
    displaySaved();
    setSavedAt(new Date().toString());
    localStorage[docTitle] = currentHTML;
  };

  //Gets Users Docs from localstorage
  const loadDocs = () => {
    body?.classList.add('noscroll');
    container?.classList.add('hide');
    const docs = Object.keys(localStorage);
    setUserDocs(docs);
    setShow(!show);
  };

  //changes docs based on load button in modal
  const changeDocs = (docName: string) => {
    body?.classList.remove('noscroll');
    container?.classList.remove('hide');
    const doc = docName;
    const html: string = localStorage.getItem(doc)!;
    console.log(html);
    setCurrentHTML(html);
    setDocTitle(doc);
    if (content.current) {
      content.current.innerHTML = html;
    }
    if (show === false) {
      setShow(!show);
    }
  };

  //used for the back button in the modal
  const setHidden = () => {
    body?.classList.remove('noscroll');
    container?.classList.remove('hide');
    setShow(!show);
  };

  const displaySaved = () => {
    setTimeout(() => {
      setSavedOK(false);
    }, 3000);
  };

  const displayHTML = () => {
    setShowHTML(!showHTML);
  };

  useEffect(() => {
    //does untitiled-document exist in localstorage?
    if (
      localStorage.getItem('untitled-document') &&
      docTitle === 'untitled-document'
    ) {
      changeDocs('untitled-document');
    }
    const docs = Object.keys(localStorage);
    setUserDocs([...docs]);
    console.log(userDocs);
    if (content.current) {
      setCurrentHTML(content.current.innerHTML);
    }
  }, [docTitle]);

  useEffect(() => {
    const timer = setTimeout(() => {
      saveDoc();
    }, 2000);
    return () => {
      setSavedOK(false);
      setShowSpinner(false);
      clearTimeout(timer);
    };
  }, [currentHTML]);

  return (
    <>
      <h1>MB-WYSIWYG Text Editor</h1>
      <div className="modalcontainer">
        <Modal
          show={show}
          userDocs={userDocs}
          hide={setHidden}
          changeDocs={(
            e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>
          ) => {
            const docName: string = e.currentTarget.id;
            changeDocs(docName);
          }}
        />
      </div>
      <div className="container">
        <div className="file-mgr">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveDoc();
            }}
          >
            <Tooltip title="Name your document here">
              <input
                value={docTitle}
                onChange={(e) => {
                  setDocTitle(e.target.value);
                }}
                placeholder="untitled-document"
                required={true}
              ></input>
            </Tooltip>
            <Tooltip title="Create a new document">
              <button onClick={createNewDoc}>
                <FontAwesomeIcon icon={faFile} />
              </button>
            </Tooltip>
            <Tooltip title="Open an existing document">
              <button onClick={loadDocs}>
                <FontAwesomeIcon icon={faFolderOpen} />
              </button>
            </Tooltip>
            <Tooltip title="Save the current document">
              <button>
                <FontAwesomeIcon icon={faSave} />
              </button>
            </Tooltip>
          </form>

          <span className="saveArea" hidden={showSpinner}>
            <div className="autosave">
              <p>Autosaving...</p>
              <FontAwesomeIcon className="fa-spinner" icon={faCircleNotch} />
            </div>
          </span>
          {savedOK && <p className="savedmsg">Saved</p>}
        </div>
        <p>
          {savedAt === undefined
            ? 'Unsaved'
            : `Document last saved at: ${savedAt}`}
        </p>

        <Toolbar toggleHTML={displayHTML} />
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
        <div hidden={showHTML} className="currentHTML">
          <h4>Document HTML</h4>
          {currentHTML}
        </div>
      </div>
      <footer>
        <div>
          Created by
          <a href="https://www.linkedin.com/in/andrewlloyd01/"> Andrew Lloyd</a>
        </div>
      </footer>
    </>
  );
};

export default App;
