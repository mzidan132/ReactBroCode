import React,{useState, useEffect} from 'react'

export default function Windw() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(()=> {
    window.addEventListener('resize',  handleResize)
    console.log('event listener added')

    return () => {
      window.removeEventListener('resize', handleResize) 
      console.log('removed')
    }

  },[])

  //window.addEventListener('resize',  handleResize)
  //console.log('event listener added') // 1000 time happens

  function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <div>Widht: {width} and Height:{height}</div>
  )
}

