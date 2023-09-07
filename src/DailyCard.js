import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
import Moment from 'moment';

export const DailyCard = ({valor}) => {

  const convertDate = (value) => {
    const timestamp = +value;
    const date = new Date(timestamp * 1000);
    return (Moment(date)).format('DD MMM')
  }
  
  const convertDateDay = (value) => {
    const timestamp = +value;
    const date = new Date(timestamp * 1000);
    return (Moment(date)).format('dd')
  }
    
return (
<div className='daySection'>
<div className='title'><b>8-day forecast</b></div>
<TableContainer component={Paper}>   
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
      <TableCell size='small'>Day</TableCell>
      <TableCell size='small'>Temperature</TableCell>
      <TableCell size='small'>Description</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {valor.map((row) => (
      <TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell size='small' component="th" scope="row" >
            {convertDateDay(row.dt)}, {convertDate(row.dt)}
        </TableCell>
        <TableCell size='small' align="right">
            <div className='daily'>
                <img height="40px" width="40px" src={`https://openweathermap.org/img/wn/${row.weather[0].icon}@2x.png`}/> 
                <span>{row.temp.min}/{row.temp.max}</span>
            </div>
            </TableCell>
        <TableCell size='small' align="left">{row.weather[0].description}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
</div>
)
}
