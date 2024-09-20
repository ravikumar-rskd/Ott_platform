import React from 'react';
import { useDispatch } from 'react-redux';
import { setGenre, getMovies } from './movieSlice';
import { Box, Button, List, ListItem } from '@mui/material';

const Sidebar2 = () => {
  const dispatch = useDispatch();

  const handleGenreClick = (genreId) => {
    console.log("Genre clicked:", genreId); // Debugging message
    dispatch(setGenre(genreId));
    dispatch(getMovies(genreId));
  };

  return (
   <Box>
   <List>
        <ListItem>
          <Button variant="contained" onClick={() => handleGenreClick(28)}>
            Action
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="contained" onClick={() => handleGenreClick(35)}>
            Comedy
          </Button>
        </ListItem>
      </List>
      </Box>

  );
};

export default Sidebar2;