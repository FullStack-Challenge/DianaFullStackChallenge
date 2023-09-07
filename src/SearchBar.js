import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';


export const SearchBar = ({handleFunction}) => {

    const [nombre, setNombre] = useState("");

    const handleClick = () => {
        console.log(nombre);
        handleFunction(nombre);
    }
    
    const handleChange = (e) => {
        console.log(e.target.value);
        setNombre(e.target.value);
    }

    return (
    <div> 
        <div className="searchBar">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} className='textField' size="small"/>
            <Button variant="contained" size="small" onClick={handleClick}>Buscar</Button>
        </div>
    </div>)
}