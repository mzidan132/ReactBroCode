import React,{useState, useEffect, useRef} from 'react'

export default function Stopwatch() {

    const[running, setRunning] = useState(false)
    const[elapsed, setElapsed] = useState(0)
    const intervalid = useRef(null)
    const startref = useRef(0)

    useEffect(
        () => {
            if(running){
                intervalid.current = setInterval( ()=>{
                    setElapsed(Date.now() - startref.current)
                } , 10)
            }

            return () => {
                clearInterval(intervalid.current)
            }

        }, [running]
    )

    function start(){
        setRunning(true)
        startref.current = Date.now() - elapsed
    }

    function stop(){
        setRunning(false)
    }

    function reset(){
        setElapsed(0)
        setRunning(false)
    }

    function format(){
        let hours = Math.floor(elapsed / (1000*50*60))
        let mins = Math.floor(elapsed / (1000*60)%60)
        let sec = Math.floor(elapsed / (1000)%60)
        let ms = Math.floor((elapsed % 1000)/10)
        hours = String(hours).padStart(2,"0")
        mins = String(mins).padStart(2,"0")
        sec = String(sec).padStart(2,"0")
        ms = String(ms).padStart(2,"0")

        return `${hours}:${mins}:${sec}:${ms}`
    }

  return (
    <div>Stopwatch <br/>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        <p>{format()}</p>
    </div>
  )
}
