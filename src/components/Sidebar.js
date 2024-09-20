import React, { useState } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { ArrowDropDown } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { setGenre, getMovies } from './movieSlice';
import MovieIcon from '@mui/icons-material/Movie';
import {useNavigate} from 'react-router-dom';



const GenreSideBar = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const homeClick=()=>{
    navigate('/');
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGenreClick = (genreId) => {
    console.log("Genre clicked:", genreId); // Debugging message
    navigate('/');
    dispatch(setGenre(genreId));
    dispatch(getMovies(genreId));
    handleClose();
  };

  const genres=[
    {id: 28,  name: "Action"},
    {id: 12,  name: "Adventure"},
    {id: 16,  name: "Animation"},
    {id: 35,  name: "Comedy"},
    {id: 80,  name: "Crime"},
    {id: 18,  name: "Drama"},
    {id: 10751, name: "Family"},
    {id: 27,  name: "Horror"},
    {id: 10402, name: "Music"},
    {id: 10749, name: "Romance"},
  ]
  

  return (
    <Box
      sx={{
        width: 200,
        height: "100vh",
        backgroundColor: "warning.main",
        color: "black",
        position: "fixed",
        top: 56,
        paddingTop: "5px", // Adjust to the height of your header
        left:0,
      
      }}
    >
      <List>
        <ListItem button
        sx={{
          "&:hover":{
            background:'white'
          },
        }}
        onClick={homeClick}
        >
          <ListItemIcon>
            <HomeIcon sx={{ blockSize:30, color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button  sx={{
          "&:hover":{
            background:'white'
          }
        }}>
          <ListItemIcon>
            <InfoIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText  primary="About" />
        </ListItem>
        <ListItem button onClick={handleClick} sx={{
          "&:hover":{
            background:'white'
          }
        }}>
          <ListItemIcon>
            <MovieIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Genres" />
          <ArrowDropDown/>
        </ListItem>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {genres.map((genre)=>(

            <MenuItem key={genre.id} onClick={() => handleGenreClick(genre.id) }>
              <ListItemIcon>
              <MovieIcon sx={{ color: 'black' }} />
              </ListItemIcon>
            <ListItemText primary={genre.name} />
            </MenuItem>
          ))}
        </Menu>
        <ListItem button  sx={{
          "&:hover":{
            background:'white'
          }
        }}>
          <ListItemIcon>
            <ContactMailIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );
};

export default GenreSideBar;
