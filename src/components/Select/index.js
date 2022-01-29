import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({allMovies,categorie}) {
  const [age, setAge] = React.useState('');
 let deleteDuplicateCategorie = allMovies.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.category === value.category  
  ))
  )
   

  const handleChange = (event) => {
    setAge(event.target.value);
    categorie(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120, marginTop:10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Categorie"
          onChange={handleChange}
        > <MenuItem value="reset">
        <em>None</em>
      </MenuItem>
            { deleteDuplicateCategorie && 
            deleteDuplicateCategorie.map((movie, index) => (
              <MenuItem  key={index} value={movie.category}>{movie.category}</MenuItem>
              
          ))} 
        </Select>
      </FormControl>
    </Box>
  );
}