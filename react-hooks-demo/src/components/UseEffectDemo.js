import React, { useEffect, useState, useRef } from "react";

function UseEffectDemo() {
  return (
    <>
      <h1>useEffect Hook</h1>
      <Timer />
      {/* <Timer timeDelay={200}/> */}
      <CountInputChangesDependency />
      <CountInputChangesRef />
      <CountCode />
    </>
  );
}

function Timer({ timeDelay = 1000 }) {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, timeDelay);
    return () => clearInterval(id); //Clean Up function
  }, [timeDelay]);

  return (
    <>
      <h3>Stopwatch is {timer}</h3>
    </>
  );
}

function CountInputChangesDependency() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);
  useEffect(() => setCount((prevCount) => prevCount + 1), [value]);
  // useEffect(() => setCount(count + 1)); // Will cause an infinite loop
  const onChange = ({ target }) => setValue(target.value);
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}

function CountInputChangesRef() {
  const [value, setValue] = useState("");
  const countRef = useRef(0);
  const onChange = ({ target }) => {
    setValue(target.value);
    countRef.current++;
  };
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {countRef.current}</div>
    </div>
  );
}

function CountCode() {
  const [code, setCode] = useState({ value: "", countCode: 0 });

  useEffect(() => {
    if (code.value === "SWE Rocks!") {
      setCode((c) => ({ ...c, countCode: c.countCode + 1 }));
    }
  }, [code]);

  const onChange = ({ target }) => {
    setCode((c) => ({ ...c, value: target.value }));
  };
  return (
    <div>
      <input type="text" value={code.value} onChange={onChange} />
      <div>Number of codes: {code.countCode}</div>
    </div>
  );
}

export default UseEffectDemo;
