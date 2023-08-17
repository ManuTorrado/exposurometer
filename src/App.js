import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [ip, setIp] = useState('')
  const [geodata,setGeoData] = useState({})


useEffect(()=>{
 
if(ip){
    (async ()=>{
      fetch(`http://ip-api.com/json/${ip}`)
      .then(response => response.json() )  
      .then(data => {
          setGeoData(data)
        }
      
      ).catch(error => {
      }) })()
  }  
},[ip])
useEffect(()=>{
console.log(geodata)
},[geodata])
 
useEffect(()=>{
(async () => {
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    setIp(data.ip)
  })
  .catch(error => {
    console.error('Error al obtener la dirección IP:', error);
  });
})();



return () => {
  // this now gets called when the component unmounts
};

  },[])
  useEffect(()=>{

  },[ip])
  return (
    <div style={{backgroundColor:'black', color: 'white'}}className="App">
    
        <img src={logo} width={64}className="App-logo" alt="logo" />

        <h5>IP Address</h5>
        <h5>{ip}</h5>
        <h5>User Agent</h5>
        <h5>{window.navigator.userAgent} </h5> <br/>
        <h5>{window.innerWidth +" x "+window.innerHeight}</h5>
        <h5>{geodata.org}</h5>
        <h5>{geodata.isp}</h5>
        <h5>{geodata.country}</h5>
        <h5>{geodata.city}</h5>
        <h5>{geodata.as}</h5>
        <noscript>Your browser does not support JavaScript!</noscript>

    
    </div>
  );
}

export default App;
