import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  const submit = async(variable)=>{
    try{
      
      const number1 = parseFloat(document.getElementById('firstNum').value);
      const number2 = parseFloat(document.getElementById('secondNum').value);
      console.log(number1)
      console.log(number2)
      const resp = await axios.post('http://localhost:8000/beckend/cal', {
      num1: number1,
      num2: number2,
      op: variable
      });
      document.getElementById('texthere').innerText =`${resp.data.result}`
      console.log(resp.data.rsulet);
      
    }catch(e){
      console.error(e);
    }
  }
  return (
    <>
      <input type="text" placeholder='first number' id='firstNum'/>
      <input type="text" placeholder='second number' id='secondNum'/>
      <button onClick={()=>submit('-')}>sub</button>
      <button onClick={()=>submit('+')}>add</button>
      <button onClick={()=>submit('*')}>multiply</button>
      <button onClick={()=>submit('/')}>divide</button>
      <textarea id='texthere'></textarea>
      
    </>
  )
}

export default App
