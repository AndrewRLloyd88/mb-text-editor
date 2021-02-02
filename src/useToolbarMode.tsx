function UseToolbarMode(event: string) {
  console.log(event);
  switch (event) {
    case 'Bold':
      document.execCommand('bold');
      break;

    case 'Italic':
      document.execCommand('italic');
      break;

    case 'Underline':
      document.execCommand('underline');
      break;

    case 'Justify-Left':
      document.execCommand('justifyleft');
      break;

    case 'Justify-Right':
      document.execCommand('justifyright');
      break;

    case 'Justify-Center':
      document.execCommand('justifycenter');
      break;
    default:
      break;
  }
}

export default UseToolbarMode;
