import React, { useState } from 'react';
import Button from '../../components/Button';

// hooks go inside a function component
// multiple state hooks can be used
// // you only pass the default value to the useState method
// // you use the function to pass in the value
// // value becomes what is stored

const StateHook = () => {
  const fruitInventory = ['banana', 'apple', 'canteloupe'];
  
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('')

  return (
    <div>
      What kind of fruit would you like?
      <select onChange={(event) => setFruit(event.target.options[event.target.selectedIndex].value)} value='default'>
        <option disabled value='default'>Select a fruit</option>
        {fruitInventory.map(item => <option key={item} value={item} style={{ textTransform: 'capitalize' }}>{item}</option>)}
      </select>
      <br />
      <br />
      How many of them would you like? <Button primaryStyle onClick={() => setCount(count + 1)} label={count}/>
      <br />
      You have ordered {count} {fruit}{fruit && count > 1 && 's'}
    </div>
  )
}

export default StateHook;
