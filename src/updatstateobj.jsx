import {useState} from 'react'

export default function UpdateObj(){

    const [car, setCar] = useState([]);
    const [carYear, setCarYear] = useState([]);
    const [carModel, setCarModel] = useState([]);

    function addCar(){
        const newCar = {
            year: carYear,
            model: carModel
        };

        setCar(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarModel('');
    }

    function removeCar(index) {
        setCar(c => c.filter((_, i) => i !== index));
    }


    function yearChange(event){
        setCarYear(event.target.value);
    }

    function modelChange(event){
        setCarModel(event.target.value);
    }

    return (

        <div>

            <h2>List of Cars</h2>

            <ul>
                {car.map(
                    (cars,index) => <li key={index} onClick={() => removeCar(index)}>
                    {cars.year} {cars.model}</li>
                )}
            </ul>

            <input type = "number" value={carYear} onChange={yearChange}/>
            <input type = "text" value={carModel} onChange={modelChange}/>
            <button onClick={addCar}>Add Car</button>
            <p>Car year {carYear} and model {carModel}</p>

        </div>

    );

}