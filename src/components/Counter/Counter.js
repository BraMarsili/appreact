import { useState } from 'react'

const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)
    console.log(onAdd)
    
    const add = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const deduct = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }


    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={add}>Añadir</button>
            <button onClick={deduct}>Quitar</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter

