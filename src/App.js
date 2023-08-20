import logo from './logo.svg';
import {CgScreen} from 'react-icons/cg'
import { useEffect, useState } from 'react';
import './App.css'

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
    <div style={{backgroundColor: 'white',  height: '100vh', textAlign:'left', display: 'flex',justifyContent: 'center'}}>

    <div>
        <div class="description">
        <h1>What sites see?</h1>
        <p>🌐 Ever wondered what information websites gather from your devices? Curious to know which data you're sharing? Dive in and explore now!</p>
        <button class="calculate">Calculate</button>
        </div>
      <div className='sheet' style={{color: 'grey', display:"flex", justifyContent: 'center'}}>
      <div>
        <h5>{geodata.org}</h5>
        <h5>{geodata.isp}</h5>
        <h5>{geodata.country}</h5>
        <h5>{geodata.city}</h5>
        <h5>{geodata.as}</h5>

        <p>Browser Name:  {navigator.appName} </p> 
<p>Browser Version:  {navigator.appVersion}  </p> 
<p>Cookies Enabled:  { navigator.cookieEnabled}  </p> 
<p>Browser Language:   {navigator.language} </p> 
<p>Browser Online:   {navigator.onLine}  </p> 
<p>Platform:  {navigator.platform} </p> 
<h3>User Agent</h3>
<h5>{window.navigator.userAgent} </h5> <br/>
        </div>
        <div>
        <h3>IP Address</h3>
        <h5>{ip}</h5>
       
        <h3>   <CgScreen/> Screen size </h3>
        <h5>{window.innerWidth +" x "+window.innerHeight}</h5>
    
     
        </div>

    
        </div>
        <noscript>Your browser does not support JavaScript!</noscript>    
    </div>
    </div>
  );
}

export default App;
