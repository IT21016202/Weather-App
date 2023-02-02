import axios from 'axios';
import cities from './cities.json';

function Data(){

    const cityArr = [];

    {cities.List?.map((cityData)=>{
        cityArr.push(Number(cityData.CityCode));
    })}

    const time = new Date().getTime();
    const cityCodes = [1248991,1850147,2644210,2988507,2147714,4930956,1796236,3143244];

    axios.get(`http://api.openweathermap.org/data/2.5/group?id=${cityCodes}&units=metric&appid=${process.env.REACT_APP_API_KEY_1}`)
    .then((res)=>{
        localStorage.setItem("weather", JSON.stringify(res.data.list));
        localStorage.setItem("weather_expire", time + 300000);
    }).catch((err)=>{
        console.log(err);
    })
                  
}

export default Data();