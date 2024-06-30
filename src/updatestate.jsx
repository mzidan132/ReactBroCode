import {useState} from 'react'

export default function Update(){
 
    const [food, setFood] = useState(['Apple','Banana'])

    function addFood(){
        
        const newFood = document.getElementById('input').value;
        document.getElementById('input').value = "";
        //setFood([...food, newFood]); //spread operator copies prev item
        setFood(f => [...f, newFood]);

    }

    function removeFood(index){

        setFood(food.filter((_, i) => i!==index )) // _ params passed to func ignore

    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((food, index) => <li key={index} 
                onClick={() => removeFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="input" placeholder="Enter food" />
            <button onClick = {addFood}>Add food</button>
        </div>
    );
}