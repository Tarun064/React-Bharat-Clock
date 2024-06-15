import { useEffect } from "react";
import { useState } from "react";

let CurrentTimer = ()=>{
  const [time,setTime] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000);

    return ()=>{
      clearInterval(intervalId);
    };
  },[]);
  return (
    <p className="lead">
      This is the current time: <span className="timer"> {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()} </span>
    </p>
  )

}

export default CurrentTimer;