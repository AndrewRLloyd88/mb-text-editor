import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

type Props = {
  id: string;
  icon?: IconDefinition;
};

export default function LinkButton(props: Props) {
  const [open, setOpen] = useState(false);
  const [url, setURL] = useState('');
  const [selection, setSelection] = useState({} as Range);
  const [selectedText, setSelectedText] = useState('');

  const checkForSelection = () => {
    handleClickOpen();
  };

  const setLink = () => {
    if (selection) {
      if (window.getSelection) {
        let sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(selection);
      }
    }
    setOpen(false);
    document.execCommand(
      'insertHTML',
      false,
      '<a href="' + url + '" target="_blank">' + selectedText + '</a>'
    );
  };

  const handleClickOpen = () => {
    const select = window.getSelection();
    const stext = window?.getSelection()?.toString();
    const coords = select?.getRangeAt(0);
    setSelection(coords as Range);
    setSelectedText(stext as string);
    setOpen(true);
  };

  const handleClose = () => {
    console.log(selection);
    setOpen(false);
  };

  return (
    <div>
      <button id={props.id} onClick={checkForSelection}>
        {props.icon ? <FontAwesomeIcon icon={props.icon} /> : props.id[0]}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Enter URL"
            value={url}
            onChange={(e) => {
              setURL(e.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={setLink} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
