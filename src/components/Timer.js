import { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";

export default function Timer({ setStop, index }) {
  const { selectedAnswer, timer, setTimer } = useContext(AppContext);

  useEffect(() => {
    if (timer === 0) {
      return setStop(true);
    }
    if (selectedAnswer) {
      return setStop(true);
    }
    // if(!selectedAnswer){

    // }
    const interval = setInterval(() => {
      setTimer((pre) => pre - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedAnswer, setStop, setTimer, timer]);
  useEffect(() => {
    setTimer(5);
  }, [index, setTimer]);
  return timer;
}
