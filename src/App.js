import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';
import ComplexGrid from './Componente.js';
import {SearchBar} from './SearchBar.js';
import TextField from '@mui/material/TextField';
import data from './temp.json';

import {Today} from './Today.js';
import { DailyCard } from './DailyCard.js';

import Alert from '@mui/material/Alert';
import { TodaySection } from './TodaySection.js';

const App = () => {
  const [nombre, setNombre] = useState("");
  const [cityWeather, setCityWeather] = useState({});
  const [dailyInfo, setDailyInfo] = useState({});
  const [component, setComponent] = useState();
  const [todayInfo, setTodayInfo] = useState();
  const [error, setError] = useState("");


  const handleChangeSearchBar = (nombreCiudad) => {
    setNombre(nombreCiudad);
    callApiCurrent(nombreCiudad);
  }

  const callApiCurrent = async (nombreCiudad) => {
    try {
      const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&units=metric&APPID=b47efc4ff7aaf83b798b518eab5639e8`);
      const today = mapResult(result);
      setCityWeather(today);
      const daily = data.daily;
      setDailyInfo(daily);
      let todayInfo = ShowDailyInfo(today);
      let component = MapResultDailyInfo(daily);
      setTodayInfo(todayInfo);
      setComponent(component);
      setError("");
    } catch (error) {
      setError("true");
    }
     
  }


  const callApiGeneral = async (latitud, longitud) => {
    try {
      //const result = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&units=metric&appid=b1a1bc27e4724b24981239941992644d`);
      //const result = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=undefined&lon=undefined&units=metric&appid=b1a1bc27e4724b24981239941992644d`);
      //const variable = result.data.daily

      

      //console.log(variable);
      //mapResultDaily(result);
    } catch (error) {
      
    }
    
 }

  const mapResult = (result) => {
    const weather = new Today(result.data.name, result.data.sys.country, result.data.main.temp, result.data.main.feels_like, result.data.weather[0].description,
      result.data.main.temp_min, result.data.main.temp_max, result.data.main.pressure, result.data.main.humidity, result.data.weather[0].icon, result.data.coord.lon, result.data.coord.lat);
      return weather;
    }

    const mapResultDaily = (result) => {
      const dailyInfo = result.data.daily;
      console.log("mapResultDaily **", dailyInfo[0].temp.day);
    }

    const MapResultDailyInfo = (info) => {
        return (<DailyCard valor={info}></DailyCard>)
    }

    const ShowDailyInfo = (cityWeather) => {
      return (<TodaySection cityWeather = {cityWeather}></TodaySection>)
    }

  return (

    
    <div className="App">
        {error == 'true'? <Alert severity="error">Por favor ingresa una ciudad valida </Alert>:  null}
        <Grid container spacing={2} columns={16}>
        <Grid item xs={5}>
        <Item> 
            
            <SearchBar handleFunction = {handleChangeSearchBar}></SearchBar>
        </Item>
        <Item>
            {todayInfo}
        </Item>
        </Grid>
        <Grid item xs={9}>
        <Item>
           {component}
        </Item>
        </Grid>
        <Grid item xs={2}>
        <Item>
        </Item>
        </Grid>
      </Grid>
      
      
      <div></div>
    </div>
   
  );
}

export default App;
