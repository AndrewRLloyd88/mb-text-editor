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
    default:
      break;
  }
}

export default UseToolbarMode;
