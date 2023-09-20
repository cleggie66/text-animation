import { useEffect, useRef, useState } from 'react';
import a00 from "../../letters/a/navbar00.png";
import a01 from "../../letters/a/navbar01.png";
import a02 from "../../letters/a/navbar02.png";
import a03 from "../../letters/a/navbar03.png";
import a04 from "../../letters/a/navbar04.png";
import a05 from "../../letters/a/navbar05.png";
import a06 from "../../letters/a/navbar06.png";
import a07 from "../../letters/a/navbar07.png";
import a08 from "../../letters/a/navbar08.png";
import a09 from "../../letters/a/navbar09.png";
import a10 from "../../letters/a/navbar10.png";
import a11 from "../../letters/a/navbar11.png";
import a12 from "../../letters/a/navbar12.png";

import b00 from "../../letters/b/navbar00.png";
import b01 from "../../letters/b/navbar01.png";
import b02 from "../../letters/b/navbar02.png";
import b03 from "../../letters/b/navbar03.png";
import b04 from "../../letters/b/navbar04.png";
import b05 from "../../letters/b/navbar05.png";
import b06 from "../../letters/b/navbar06.png";
import b07 from "../../letters/b/navbar07.png";
import b08 from "../../letters/b/navbar08.png";
import b09 from "../../letters/b/navbar09.png";
import b10 from "../../letters/b/navbar10.png";
import b11 from "../../letters/b/navbar11.png";
import b12 from "../../letters/b/navbar12.png";

import o00 from "../../letters/o/navbar00.png";
import o01 from "../../letters/o/navbar01.png";
import o02 from "../../letters/o/navbar02.png";
import o03 from "../../letters/o/navbar03.png";
import o04 from "../../letters/o/navbar04.png";
import o05 from "../../letters/o/navbar05.png";
import o06 from "../../letters/o/navbar06.png";
import o07 from "../../letters/o/navbar07.png";
import o08 from "../../letters/o/navbar08.png";
import o09 from "../../letters/o/navbar09.png";
import o10 from "../../letters/o/navbar10.png";
import o11 from "../../letters/o/navbar11.png";
import o12 from "../../letters/o/navbar12.png";

import u00 from "../../letters/u/navbar00.png";
import u01 from "../../letters/u/navbar01.png";
import u02 from "../../letters/u/navbar02.png";
import u03 from "../../letters/u/navbar03.png";
import u04 from "../../letters/u/navbar04.png";
import u05 from "../../letters/u/navbar05.png";
import u06 from "../../letters/u/navbar06.png";
import u07 from "../../letters/u/navbar07.png";
import u08 from "../../letters/u/navbar08.png";
import u09 from "../../letters/u/navbar09.png";
import u10 from "../../letters/u/navbar10.png";
import u11 from "../../letters/u/navbar11.png";
import u12 from "../../letters/u/navbar12.png";

import t00 from "../../letters/t/navbar00.png";
import t01 from "../../letters/t/navbar01.png";
import t02 from "../../letters/t/navbar02.png";
import t03 from "../../letters/t/navbar03.png";
import t04 from "../../letters/t/navbar04.png";
import t05 from "../../letters/t/navbar05.png";
import t06 from "../../letters/t/navbar06.png";
import t07 from "../../letters/t/navbar07.png";
import t08 from "../../letters/t/navbar08.png";
import t09 from "../../letters/t/navbar09.png";
import t10 from "../../letters/t/navbar10.png";
import t11 from "../../letters/t/navbar11.png";
import t12 from "../../letters/t/navbar12.png";

function LetterGenerator(props) {
    const intervalTime = 20;
    const frameCount = 12
    const letter = props.letter;

    const _intervalRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);
    const [endCounter, setEndCounter] = useState(false);
    const [counter, setCounter] = useState(0);

    const letterObj = {
        "a": [a00, a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12],
        "b": [b00, b01, b02, b03, b04, b05, b06, b07, b08, b09, b10, b11, b12],
        "o": [o00, o01, o02, o03, o04, o05, o06, o07, o08, o09, o10, o11, o12],
        "u": [u00, u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
        "t": [t00, t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12],
    }
    useEffect(() => {
        if (startCounter) {
            _intervalRef.current = setInterval(() => {
                setCounter((counter) => {
                    if (counter < frameCount) {
                        return counter + 1
                    } else {
                        clearInterval(_intervalRef.current);
                        return frameCount;
                    }
                });
            }, intervalTime);
        }
        return () => clearInterval(_intervalRef.current);
    }, [startCounter]);

    useEffect(() => {
        if (endCounter) {
            _intervalRef.current = setInterval(() => {
                setCounter((counter) => {
                    if (counter > 0) {
                        return counter - 1
                    } else {
                        clearInterval(_intervalRef.current);
                        return 0;
                    }
                });
            }, intervalTime);
        }
        return () => clearInterval(_intervalRef.current);
    }, [endCounter]);

    return (
        <>
            <div className="letter"
                onMouseOver={() => {
                    setStartCounter(true)
                    setEndCounter(false)
                }}
                onMouseOut={() => {
                    setStartCounter(false)
                    setEndCounter(true)
                }}
            >
                <img src={letterObj[letter][counter]} alt={letter}>
                </img>
            </div>
        </>
    );
};

export default LetterGenerator;