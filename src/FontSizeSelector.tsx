import React, { useState } from 'react';

export default function FontSizeSelector() {
  const [fontSize, setFontSize] = useState(12);

  const changeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let range = window.getSelection()?.getRangeAt(0);
    var colour = document.queryCommandValue('ForeColor');
    console.log(colour);
    const oldContent = document.createTextNode((range || {}).toString());
    console.log(oldContent);
    if (oldContent.length === 0) {
      return;
    }
    const newElement = document.createElement('span');
    newElement.style.fontSize = `${e.target.value}px`;
    newElement.style.color = colour;
    newElement.style.textDecorationColor = colour;
    newElement.append(oldContent);
    console.log(range);
    range?.deleteContents();
    range?.insertNode(newElement);
  };

  return (
    <select id="input-font" className="input" onChange={(e) => changeSize(e)}>
      <option value={fontSize}>{fontSize}</option>
      <option value="6.5">6.5</option>
      <option value="7.5">7.5</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="10.5">10.5</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="14">14</option>
      <option value="16">16</option>
      <option value="18">18</option>
      <option value="20">20</option>
      <option value="22">22</option>
      <option value="26">26</option>
      <option value="28">28</option>
      <option value="36">36</option>
      <option value="48">48</option>
      <option value="56">56</option>
      <option value="72">72</option>
    </select>
  );
}
