import './App.css';
import HeaderMenuNav from './Components/headerMenuNav';
import BodyCenter from './Components/bodyCenter';
import { useEffect, useState } from 'react';

function App() {
  const [type, setType] = useState('pomodoroTime');
  const [timeMinutes, setTimeMinutes] = useState(25);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [startBtn, setStartBtn] = useState(false);

  const handleBackground = (value) => {
    setType(value);
    setTimeSeconds(0);
    setStartBtn(false);
    if (value==='pomodoroTime'){
      setTimeMinutes(25)
    }
    if (value==='shortBreak'){
      setTimeMinutes(5)
    }
    if (value==='longBreak'){
      setTimeMinutes(15)
    }
    
  }

  useEffect(() => {
    let interval = null;
    console.log('Si');
    
    if (startBtn === true && timeMinutes + timeSeconds > 0){
      interval = setInterval(() => {
        if(timeSeconds === 0){
          setTimeMinutes((time) => time - 1);
          setTimeSeconds(60);
        }
        setTimeSeconds((timeSeconds) => timeSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setStartBtn(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startBtn, timeMinutes, timeSeconds])
  
  const handleStartBtn = (value) => {
    setStartBtn(value);
    console.log(value);
    return value;
  }

  return (
    <div className={`${type}Bg`}>
      <div className={`estructure ${type}Bg`}>
        <HeaderMenuNav typeBg={type}/>
        <BodyCenter handleBackground={handleBackground} handleStartBtn={handleStartBtn} typeBg={type} timeMinutes={timeMinutes} timeSeconds={timeSeconds} startBtn={startBtn} />
      </div>
    </div>
  );
}

export default App;
