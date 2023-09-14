import React, { useState } from 'react';

const api= {
  key: "917e0bba7b8d815f3e4919cfe9c5f0c0",
  base: "https://api.openweathermap.org/data/2.5/"
}
// const api_id = "917e0bba7b8d815f3e4919cfe9c5f0c0"
// const cityname = "Bhubaneswar"
// const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_id}`

function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter"){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}























// import React, {useState, useEffect} from 'react'
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState(null);
//   useEffect(()=>{
//     const getthedata = async ()=>{
//       const api_id = "917e0bba7b8d815f3e4919cfe9c5f0c0"
//       const cityname = "London"
//       const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_id}`
//       try {
//         const res = await axios.get(url)    
//         console.log(res) 
        
//       } catch (error) {
//         console.warn("error babu bhaiya")
//       }
//     }
//     getthedata();

//   },[])
//   return (
//     <div className="App">
//       <div className="container">
//         <div className="top">
//           <div className="location">
//             <p>Bhubaneswar</p>
//           </div>
//           <div className="temperature">
//             25
//           </div>
//           <div className ="description">
//             <p>Cloudy</p>
//           </div>
//         </div>
//         <div className="bottom">
//           <div className="humidity">
//             <p>20%</p>
//           </div>
//           <div className="wind">
//             12MPH
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
