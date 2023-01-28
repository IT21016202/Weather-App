import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DashBack from '../images/DashBack.jpg';
import Logo from '../images/Logo.png';
import CloudBack from '../images/CloudBack.png';
import { useParams } from 'react-router-dom';
import '../css/ViewWeather.css';

export const ViewWeather = () => {

  const apiKey = "74d7a1fb735f219d82b2ae845d9c886d";
  const {cityID} = useParams();
  const [weather, setWeather] = useState([]);
  
  useEffect(()=>{
    function getData(){
      axios.get(`http://api.openweathermap.org/data/2.5/group?id=${cityID}&units=metric&appid=${apiKey}`)
      .then((res)=>{
        setWeather(res.data.list);
      }).catch((err)=>{
        console.log(err);
      })
    }
    //getData();
  })

  return (
    <div>
      <img src={DashBack} style={{width: "100%"}}/>

      <div className='topic'>
        <img className='logo' src={Logo}/>
        <h1 className='topic-text'>Weather App</h1>
      </div>

      <div className='card-main'>

{weather?.map((weatherData)=>(
  
  <div className="card card-each" 
    key={weatherData.name}>
    <img className="card-img-top card-img" src={CloudBack} alt="Card image cap"/>

    <div className='card-top-left'>
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p>{weatherData.id}</p>
      <h4>{weatherData.weather[0].description}</h4>
    </div>
    <div className='card-top-right'>
      <h1>{weatherData.main.temp} &deg;c</h1>
      <h5>Temp Min: {weatherData.main.temp_min} &deg;c</h5>
      <h5>Temp Max: {weatherData.main.temp_max} &deg;c</h5>
    </div>

    <div className="card-body">    
    </div>
    
  </div>
))}

</div> 

    </div>
  )
}

export default ViewWeather;
