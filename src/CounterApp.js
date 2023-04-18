import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CounterApp({value=10}){
const  handleAdd=()=>{
    setCounter (counter+1);
}
const restcounter=()=>{
    setCounter (value)
}

let [counter, setCounter]=useState(value);

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={restcounter}>Reset</button>
        <button onClick={()=>setCounter(counter-1)}>-1</button>
        </>
    )


}

CounterApp.prototype={
    value: PropTypes.number.isRequired,

}