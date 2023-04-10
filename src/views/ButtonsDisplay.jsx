import React, { useState } from 'react'
import Button from '../components/Button';

export default function ButtonsDisplay({ name }) {

    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color:'success', step: 100},
        {color: 'danger', step: 1000}
      ];

      const [count, setCount] = useState(0);

      function increaseCount(step){
        setCount(count + step)
      };


  return (
    <>
        {count < 50? <h1> Hello {name} {count}</h1> : <h1>Good Bye {name} {count}</h1>}
        {buttons.map(button => <Button color={button.color}  key={(button.step)} step={button.step} handleClick={increaseCount} />)}
    </>
  )
}
