import React,{useState, useEffect} from 'react'

export default function Clock() {

   const [time, setTime] = useState(new Date())
   
   useEffect(
    () => {
      const interval = setInterval(()=>{
        setTime(new Date())
      }, 1000)

    return () => {
      clearInterval(interval) //free resource
    }

  },[])

  const formatTime = () => {
  
    let hours = time.getHours()
    let mins = time.getMinutes()
    let sec = time.getSeconds()
    const meridiem = hours >=12 ? "PM" : "AM"  
    hours = hours % 12 || 12
    return `${pad(hours)}:${pad(mins)}:${pad(sec)}:${meridiem}`
    
  }

  function pad(number){
    return (number < 10 ? "0" : "") + number
  }

  return (
    <div>
        <span>{formatTime()}</span>
    </div>
  )
}

