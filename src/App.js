import { useEffect, useState } from 'react';
import './App.css'
import Calculation from './routes/Calculation';

function App() {

const [calculation, setCalculation] = useState(false)
const doCalculation = () => setCalculation(true)



  return (
    <div style={{backgroundColor: 'white',  height: '100vh', textAlign:'left', display: 'flex',justifyContent: 'center'}}>

    <div>
        <div className="description">
        <h1>What sites see?</h1>
        <p>🌐 Ever wondered what information websites gather from your devices? Curious to know which data you're sharing? Dive in and explore now!</p>
        <button onClick={doCalculation} className="calculate">Calculate</button>
        </div>
      <div className='sheet' style={{color: 'grey', display:"flex", justifyContent: 'center'}}>

    {calculation? <Calculation/> : null}
    
        </div>
    </div>
    </div>
  );
}

export default App;
