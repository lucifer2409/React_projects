import './App.css';
import {useState} from 'react'
function App() {
  const [counter , Setcounter] = useState(0);
  function addvalue(){
    // console.log('Value added' , Math.random);  
    Setcounter(counter + 1);
  }
  function removevalue(){
    counter<=0?
    Setcounter(0):Setcounter(counter-1);
  }
  return (
   <>
  <h1>Counter Application : {counter}</h1>
  <h2>Counter value : {counter}</h2>
  <br />
  <button onClick={addvalue}>Add Value</button> 
  <br />
  <button onClick={removevalue}>Remove Value</button>
  <p>The value of the counter is : {counter}</p>
   </>
  );
}

export default App;
