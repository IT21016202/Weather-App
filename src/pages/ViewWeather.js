import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DashBack from '../images/DashBack.jpg';
import Logo from '../images/Logo.png';
import CloudBack from '../images/CloudBack.png';
import { useParams } from 'react-router-dom';
import '../css/ViewWeather.css';

export const ViewWeather = () => {
  //fd0c2a91be242f11c6b26c079e1ced9c
  //74d7a1fb735f219d82b2ae845d9c886d
  const apiKey = "3e9951ef252716acb6b0a0366f040715";
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
    getData();
  })

  return (
    <div>
      <img src={DashBack} style={{width: "100%"}}/>

      <div className='topic'>
        <img className='logo' src={Logo}/>
        <h1 className='topic-text'>Weather App</h1>
      </div>

      <div className='card-main-view'>

      {weather?.map((weatherData)=>( 
        
        <div className="card card-each-view" 
        key={weatherData.name}>
          <img className="card-img-top card-img-view" src={CloudBack} alt="Card image cap"/>

          <div className='card-top-middle-view'>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>{`${new Date(weatherData.dt).toLocaleDateString()} ${new Date(weatherData.dt).toLocaleTimeString()}`}</p>
            
          </div>
          <div className='card-top-left-view'>
            <h4>{weatherData.weather[0].description}</h4>
          </div>
          <div className='card-top-right-view'>
            <h1>{weatherData.main.temp} &deg;c</h1>
            <h5>Temp Min: {weatherData.main.temp_min} &deg;c</h5>
            <h5>Temp Max: {weatherData.main.temp_max} &deg;c</h5>
          </div>

          <div className='card-body'>
            <div className="card-body card-body-left-view"> 
              <p>Pressure: 1015hPa </p>
              <p>Humidity: 78%</p>
              <p>Visibility: 8.0km</p>
            </div>
            <div className='card-body card-body-middle-view'>
              <p>4m/s 120 Degree</p>
            </div>
            <div className='card-body card-body-right-view'>
              <p>Sunrise: 6:05am</p>
              <p>Sunset: 6:05am</p>
            </div>
          </div>
        </div>
      ))} 
    </div> 
    <footer>
      <div>
        <h3>2021 Fidenz Technologies</h3>
      </div>
    </footer>
  </div>
  )
}

export default ViewWeather;
