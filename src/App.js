import Timer from './components/Timer/Timer';
import Control from './components/Control/Control';
import Container from './components/Container/Container';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const interval = 1;

  const [time, setTime] = useState(0);
  const [counter, setCounter] = useState('');

  const startTime = () => {  
      setCounter(setInterval(() => {
        setTime(prevValue => prevValue + 1); 
      }, interval));
    };

  const stopTime = () => { 
      setCounter(clearInterval(counter));
    };

  const resetTime = () => { 
      setCounter(clearInterval(counter));
      setTime(0);
    };

  useEffect(() => {
    return () => {
        if(counter) clearInterval(counter);
      };
    }, []);

  return (
    <Container>
      <Timer miliseconds={time}></Timer>
      <Control startTime={startTime} stopTime={stopTime} resetTime={resetTime}></Control>
    </Container>
  );
};

export default App;
