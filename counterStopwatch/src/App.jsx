import { useState, useEffect, useRef } from 'react'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }, [isRunning]);
  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <h2>{time} sec</h2>
      </div>
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => {
          setIsRunning(false);
        }}>Pause</button>
        <button onClick={() => {
          setTime(0);
          setIsRunning(false);
        }}>Reset</button>
      </div>
    </div>
  )

}

export default App
