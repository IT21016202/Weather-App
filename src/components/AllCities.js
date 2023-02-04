import {React, useState, useEffect} from 'react'
import CloudBack from '../images/CloudBack.png';
import { Link } from 'react-router-dom';
import AddCity from './AddCity';

export const AllCities = () => {

    const [weather, setWeather] = useState([]);

    var storedWeather = JSON.parse(localStorage.getItem("weather"));
    const expireTime = localStorage.getItem("weather_expire");
    const currentTime = new Date().getTime();

    useEffect(()=>{
        function getData(){
        if(storedWeather && currentTime < expireTime){
            setWeather(storedWeather);
        } else {
            storedWeather = JSON.parse(localStorage.getItem("weather"));
            setWeather(storedWeather);
          }
        }
        getData();
        
    },[]);

  return (
    <div>
    <AddCity/>
    <div className='card-main'>
    {weather?.map((weatherData)=>(   
      <Link to={`/details/${weatherData.id}`}>        
      <div className="card card-each" key={weatherData.name}> 
        
        <img className="card-img-top card-img" src={CloudBack} alt="Card cap"/> 

        <div className='card-top-left'>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>{`${new Date(weatherData.dt).toLocaleDateString()} ${new Date(weatherData.dt).toLocaleTimeString()}`}</p>
          <h4>{weatherData.weather[0].description}</h4>
        </div>
        <div className='card-top-right'>
          <h1>{weatherData.main.temp} &deg;c</h1>
          <h5>Temp Min: {weatherData.main.temp_min} &deg;c</h5>
          <h5>Temp Max: {weatherData.main.temp_max} &deg;c</h5>
        </div>

        <div className="card-body-2"> 
          <div className="card-body card-body-left"> 
            <p>Pressure: 1015hPa</p>
            <p>Humidity: 78%</p>
            <p>Visibility: 8.0km</p>
          </div>
          <div className='card-body card-body-middle'>
            <p>4m/s 120 Degree</p>
          </div>
          <div className='card-body card-body-right'>
            <p>Sunrise: 6:05am</p>
            <p>Sunset: 6:05am</p>
          </div> 
        </div>              
      </div>
      </Link>
   ))}          
  </div> 
  </div>
  )
}

export default AllCities;
