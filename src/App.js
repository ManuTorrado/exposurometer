import { useEffect, useState } from 'react';
import './App.css'
import Calculation from './routes/Calculation';

function App() {

const [calculation, setCalculation] = useState(false)
const doCalculation = () => setCalculation(true)

window.onload = ()=>{

}

  return (
    <div style={{backgroundColor: 'white',  height: '100vh', textAlign:'left', display: 'flex',justifyContent: 'center'}}>

    <div>
        <div className="description">
        <h1>What sites see?</h1>
        <p>🌐 Ever wondered what information websites gather from your devices? Curious to know which data you're sharing? Dive in and explore now!</p>
        {calculation ? null : <button onClick={doCalculation} className="calculate">Find out!</button>}
        </div>
     
    {calculation?  <div className='sheet' style={{color: 'grey', justifyContent: 'center'}}><Calculation/> </div>: null}
  

    </div>
    </div>
  );
}

export default App;
