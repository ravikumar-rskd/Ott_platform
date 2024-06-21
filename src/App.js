import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import MovieListGenres from './components/MovieListGenre';
import MovieDetailsGenre from './components/MovieDetailsGenres';
import SearchAppBar from './components/SearchAppBar';


function App() {
  return (
  <Box sx={{backgroundColor:'#808080'}}>
    <SearchAppBar/>
   <Box display={'flex'} sx={{overflow:'auto'}} >
    <Grid container padding={1} flexGrow={1}>
      <Grid item xs={12} sm={9} >
        <Routes>
          <Route path="/" element={<MovieListGenres />} />
          <Route path="/movie/:id" element={<MovieDetailsGenre />} />
        </Routes>
      </Grid>
    </Grid>
   </Box>
  </Box>
  );
}

export default App;