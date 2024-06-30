import {useState} from 'react'

export default function StateObj(){
    
    const [car, setCar] = useState({
        year: 2024,
        model: 'Ford'
    });

    function yearChange(event){
        setCar( c => ({...c, year: event.target.value}));
    }
    
    function modelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
    
    <div>

        <input type = "number" vlaue = {car.year} onChange = {yearChange} />
        <input type = "text" value = {car.model} onChange = {modelChange} />
        <p>Your favourite car is {car.year} and model is {car.model}</p>

    </div>

    );
}