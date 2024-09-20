import React, { useState, useEffect } from 'react';
import { fetchMovies } from './api';
import { Grid, Card, CardMedia, CardContent, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    getMovies();
  }, []);

  return (
      <Grid  container spacing={2} width={1500} marginTop={8}> 
      {movies.map((movie) => (
        <Grid className='grid-item' item xs={12} sm={4} md={2} lg={2} key={movie.id} >
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <Card className='card'>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Rating value={movie.vote_average / 2} precision={0.5} readOnly />
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  
    
  );
};

export default MovieList;