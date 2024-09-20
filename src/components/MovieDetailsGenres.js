import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './Api';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
const MovieDetailsGenre = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{width:900,marginLeft:200,paddingLeft:50}} >
    <Card >
      <CardMedia
      sx={{height:800}}
        component="img"
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent >
        <Typography variant="h4">{movie.title}</Typography>
        <Typography variant="body1">{movie.overview}</Typography>
        <Typography variant="body2">Release Date: {movie.release_date}</Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default MovieDetailsGenre;