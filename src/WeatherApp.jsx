import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
   const [weatherInfo, setWeatherInfo] = useState( {
        city:"Wonderland",
        feelslike:24.84,
        temp: 25.05,
        tempMin: 46.3,
        tempMax:37,
        weather:"haze"  
   });

    
   let updateInfo = (newInfo) => {
       setWeatherInfo(newInfo);
   }


    return ( 
        <div style={{textAlign:"center"}} >
          <h2> <b>React-GeoExplorer App</b></h2>
           
<br /><br />
         <SearchBox updateInfo={updateInfo } ></SearchBox>
         <InfoBox info={weatherInfo} ></InfoBox>
         <p>Thank you for Visitng my work</p>
       
         <p><b> <i>If you wanna say Hi! I'd be happy to connect you..</i></b> </p>
            </div>
        
     )
 
}