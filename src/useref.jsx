import React,{useEffect, useRef} from 'react'
//usestate rerenders when state value change
//useref doesnt do it, it remeber info but not trigger rerender for managing time and Animation
export default function Useref() {

  const ref = useRef(0) //return current prop as object

  useEffect(
    () => {
      console.log('component rendered')
    }
  )

  function handleClick(){
    ref.current = ref.current + 1;
    console.log(ref.current)
  }

  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

