import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DashBack from '../images/DashBack.jpg';
import Logo from '../images/Logo.png';
import TileBackBlue from '../images/TileBackBlue.jpg';
import CloudBack from '../images/CloudBack.png';
import '../css/Dashboard.css';

export const Dashboard = () => {
    const apiKey = "74d7a1fb735f219d82b2ae845d9c886d";
    const cityCodes = [1248991,1850147,2644210,2988507,2147714,4930956,1796236,3143244];
    const [weather, setWeather] = useState([]);
  
    useEffect(()=>{
        function getData(){
            axios.get(`http://api.openweathermap.org/data/2.5/group?id=${cityCodes}&units=metric&appid=${apiKey}`)
            .then((res)=>{
              setWeather(res.data.list);
            }).catch((err)=>{
                console.log(err);
            })
        }
        //getData()
    })

  return (
    <div>  
        <img src={DashBack} style={{width: "100%"}}/>

        <div className='topic'>
          <img className='logo' src={Logo}/>
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
              <img className="card-img-top card-img" src={CloudBack} alt="Card image cap"/> </Link>

              <div className='card-top-left'>
                <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                <p>Timestamp</p>
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

export default Dashboard;