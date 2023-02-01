import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import DashBack from '../images/DashBack.jpg';
import Logo from '../images/Logo.png';
import CloudBack from '../images/CloudBack.png';
import '../css/Dashboard.css';
import Data from '../Data';

export const Dashboard = () => {  

    const [weather, setWeather] = useState([]);
    const storedWeather = JSON.parse(localStorage.getItem("weather"));
    const expireTime = localStorage.getItem("weather_expire");
    const currentTime = new Date().getTime();

    useEffect(()=>{
      function getData(){
        if(storedWeather && currentTime < expireTime){
          console.log("getting stored data");
          setWeather(storedWeather);
        } else {
          console.log("Calling api from dashboard");
          Data();
          storedWeather = JSON.parse(localStorage.getItem("weather"));
          setWeather(storedWeather);
        }
      }
      getData();
      
    },[])

  
  return (
    <div>  
        <img src={DashBack} style={{width: "100%"}}/>

        <div className='topic'>
          <img className='logo' src={Logo} alt="Logo"/>
          <h1 className='topic-text'>Weather App</h1>
        </div>

        <div className="input-group mb-3 add-city">
          <input type="text" className="form-control city-input" placeholder="Enter a city" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary city-input-btn" type="button">Add City</button>
          </div>
        </div>

        <div className='card-main'>
          {weather?.map((weatherData)=>(           
            <div className="card card-each" key={weatherData.name}> 
              <Link to={`/details/${weatherData.id}`}>
              <img className="card-img-top card-img" src={CloudBack} alt="Card cap"/> </Link>

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

export default Dashboard;