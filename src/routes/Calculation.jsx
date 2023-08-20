import { CgScreen } from "react-icons/cg";
import {BsGeo} from 'react-icons/bs'
import {GoBrowser} from 'react-icons/go'
import { useEffect, useState } from "react";

function Calculation() {
  const [ip, setIp] = useState("");
  const [geodata, setGeoData] = useState({});


  useEffect(() => {
    if (ip) {
      (async () => {
        fetch(`http://ip-api.com/json/${ip}`)
          .then((response) => response.json())
          .then((data) => {
            setGeoData(data);
          })
          .catch((error) => {});
      })();
    }
  }, [ip]);
  useEffect(() => {

  }, [geodata]);

  useEffect(() => {
    (async () => {
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          setIp(data.ip);
        })
        .catch((error) => {
          console.error("Error al obtener la dirección IP:", error);
        });
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);
  useEffect(() => {}, [ip]);
  return (
    <>
      <div>
        <h3>IP Address</h3>
        <p>{ip}</p>
   
            <h3>Geolocalization data <BsGeo/></h3>
            <p>
          <b>Organization:</b>
          {geodata.org}
        </p>
        <p>
          <b>ISP: </b>
          {geodata.isp}, {geodata.as}
        </p>
        <p><b>Location:</b>{geodata.country},{geodata.city}</p>
        <h3>
          Screen size <CgScreen />
        </h3>
        <p>{window.innerWidth + " x " + window.innerHeight}</p>
        <h3>Browser data <GoBrowser/></h3>
        <p>
          <b>Browser Name: </b> {navigator.appName}{" "}
        </p>
        <p>
          <b>Browser Version: </b> {navigator.appVersion}{" "}
        </p>
        <p>
          <b>Cookies Enabled: </b> {navigator.cookieEnabled ? 'True' : 'False'}{" "}
        </p>
        <p>
          <b>Browser Language: </b> {`${navigator.language}`}{" "}
        </p>
        <p>
          <b>Browser Online:</b> {navigator.onLine ? 'True': 'False'}{" "}
        </p>
        <p>
          <b>Platform: </b> {navigator.platform}{" "}
        </p>
        <h3>User Agent</h3>
        <p>{window.navigator.userAgent} </p> <br />
      </div>

      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default Calculation;
