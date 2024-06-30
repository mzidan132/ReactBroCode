import { useState } from 'react'
//onchange triggr a function everytime form input changes
export default function Counter() {

    const [count, setCount] = useState(10);
    const [name, setName] = useState('Guest');
    const [payment, setPayment] = useState('Visa');
    const [shipping, setShipping] = useState('');

    function nameChange(event) {
        setName(event.target.value);
    }

    function paymentChange(event) {
        setPayment(event.target.value);
    }

    function shippingChange(event) {
        setShipping(event.target.value);
    }

    const increment = () => {
        setCount(c => c + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <div>
                <input value={name} onChange={nameChange} />
                <p>Name:{name}</p>
                <select value={payment} onChange={paymentChange}>
                    <option value='visa'>Visa</option>
                    <option value='mastercard'>MastersCard</option>
                </select>
                <p>Payment: {payment}</p>
                <div>
                    <label><input type="radio" value="pickup" onChange={shippingChange} checked={shipping === 'pickup'} />
                        Pickup
                    </label>&nbsp;
                    <label>
                        <input type="radio" value="delivery" onChange={shippingChange} checked={shipping === 'delivery'} />
                        Delivery
                    </label>
                    <br /> <p>Shipping: {shipping}</p>
                </div>
            </div>
        </div>
    );
}