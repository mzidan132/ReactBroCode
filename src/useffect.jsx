import {useState, useEffect} from 'react'
// side effect, dependent run [] no dependency
export default function Useffect(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')

    useEffect( () => {
        document.title = `count: ${count}`

    }, [count] ) //when component mounts and count changes then work
 
    function addCount(){
        setCount(c => c+1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
        <>
        <p style={{color}}>Count {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={changeColor}>Change color</button>
        </>
    )

}
