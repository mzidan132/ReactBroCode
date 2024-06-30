import React, {useState} from  'react';

export default function Hook(){

    const [name, setName] = useState('guest');
    const [age, setAge] = useState(20)
    const [employed,setEmployed] = useState(false);

    const updateName = () => {
        setName("zidan");
        console.log(name);
    }
    const updateAge = () => {
        setAge(() => age+1);
    }
    const updateEmployee = () => {
        setEmployed(!employed);
    }
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={updateAge}>Increment Age</button>

            <p>Is Employed: {employed ? 'Yes' : 'No'}</p>
            <button onClick={updateEmployee}>Toggle</button>
        </div>
    );

}