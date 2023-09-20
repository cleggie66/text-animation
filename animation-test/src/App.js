import { useEffect, useRef, useState } from 'react';
import LetterGenerator from './components/LetterGenerator';
import a00 from "./letters/a/navbar00.png";
import a01 from "./letters/a/navbar01.png";
import a02 from "./letters/a/navbar02.png";
import a03 from "./letters/a/navbar03.png";
import a04 from "./letters/a/navbar04.png";
import a05 from "./letters/a/navbar05.png";
import a06 from "./letters/a/navbar06.png";
import a07 from "./letters/a/navbar07.png";
import a08 from "./letters/a/navbar08.png";
import a09 from "./letters/a/navbar09.png";
import a10 from "./letters/a/navbar10.png";
import a11 from "./letters/a/navbar11.png";
import a12 from "./letters/a/navbar12.png";
import './App.css';



function App() {

  return (
    <>
      <div className='word'>
        <LetterGenerator letter={"a"}/>
        <LetterGenerator letter={"b"} />
        <LetterGenerator letter={"o"} />
        <LetterGenerator letter={"u"} />
        <LetterGenerator letter={"t"} />
      </div>
    </>
  );
}

export default App;
