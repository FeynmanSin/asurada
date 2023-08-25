import React, { useEffect, useRef, useState, useCallback } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [num, setNum] = useState(1);
  const [homeNum, setHomeNum] = useState(1);
  useEffect(() => {
    console.log(">>>>>>Effect", num)
  }, [num])


  const getNum = () => {

  }
  // const getNum = useCallback(() => {

  // }, [])
  const onClick = () => {
    console.log('>>>>>>onClick prev num', num);
    setNum(prev => prev + 1);
    console.log('>>>>>>onClick next num', num);
  }
  return (
    <div className="App">
      <div>{num}</div>
      <button onClick={onClick}>click</button>
      <HomePage getNum={getNum} />
    </div>
  );
}

export default App;
