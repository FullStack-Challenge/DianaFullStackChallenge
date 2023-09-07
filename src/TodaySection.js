import './App.css';

export const TodaySection = ({cityWeather}) => {

return(

<div className='daySection'>
<div className="cityName">{cityWeather.city}, {cityWeather.country}</div>
    <div className="current-temp">
        <img className="imagen" src={`https://openweathermap.org/img/wn/${cityWeather.icon}@2x.png`}/> 
        <div className="heading">{cityWeather.temp}°C</div>
    </div>
    <div className='info'>
        <p><b>Feels like:{cityWeather.feels_like}°C {cityWeather.description}</b></p>
        <p>Temp min: {cityWeather.temp_min} , Temp max: {cityWeather.temp_max} °C<br></br>
        Pressure: {cityWeather.pressure}<br></br>
        Humidity: {cityWeather.humidity}<br></br>
        Longitud: {cityWeather.lon}<br></br>
        Latitud: {cityWeather.lat}
        </p>
    </div>
</div>

)

}