import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, newcount, numberClicked, onReset }) => {

    return (
      <div>
      <div>
        <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <h3>Times the increment/decrement buttons have been clicked: <span>{numberClicked}</span> </h3>
        <input type = "number" ref={node => (this.input = node)}></input>   
         <button onClick ={newcount} onClick={()=>onReset(this.input.value)}>Change Count Number</button>
        </div>
      </div>
    </div>
    );
}



export default Counter;