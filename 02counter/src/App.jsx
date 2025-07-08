import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 12
  let [counter, setCounter] = useState(12)

  const addValue = () => {
    if(counter<20){
      setCounter(counter + 1);
      console.log("clicked", counter + 1);
    }
  }

  const removeValue = () => {
    if (counter>0){
      setCounter(counter - 1);
      console.log("clicked", counter - 1);
    }
  }


  return (
    <>
      <h1>Rex aur react</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue} >Add value </button>
      <br />
      <button onClick= {removeValue} >remove value  </button>
      {/* <p>Footer: {counter} </p> */}
      <h1> {counter} </h1>



      </>
      
  );
}

export default App;
