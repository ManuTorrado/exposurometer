import {CgScreen} from 'react-icons/cg'
import { useEffect, useState } from 'react';


function Calculation() {

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
<>
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

<noscript>Your browser does not support JavaScript!</noscript>    

</>
  );
}

export default Calculation;
