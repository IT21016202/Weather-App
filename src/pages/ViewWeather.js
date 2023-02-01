import React, { useEffect, useState } from 'react'
import DashBack from '../images/DashBack.jpg';
import Logo from '../images/Logo.png';
import CloudBack from '../images/CloudBack.png';
import { useParams } from 'react-router-dom';
import '../css/ViewWeather.css';
import Data from '../Data';

export const ViewWeather = () => {
 
  const {cityID} = useParams();
  const [weather, setWeather] = useState([]);

  const storedWeather = JSON.parse(localStorage.getItem("weather"));
  const expireTime = localStorage.getItem("weather_expire");
  const currentTime = new Date().getTime();
  
  useEffect(()=>{
    function getOneData(){
      if(storedWeather && currentTime < expireTime){
        for(var i=0; i<8; i++){
          if(storedWeather[i].id == cityID){
            let arr = [storedWeather[i]];
            setWeather(arr);
            console.log(arr);
          }
        }
      }else{
        Data();
        storedWeather = JSON.parse(localStorage.getItem("weather"));
        for(var i=0; i<8; i++){
          if(storedWeather[i].id == cityID){
            let arr = [storedWeather[i]];
            setWeather(arr);
            console.log(arr);
          }
        }
      }
    }
    getOneData();
  },[])

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
