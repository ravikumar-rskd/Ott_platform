import React, { useState } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MovieIcon from '@mui/icons-material/Movie';

const Sidebar2 = () => {
  const [genresAnchorEl, setGenresAnchorEl] = useState(null);

  const handleGenresClick = (event) => {
    setGenresAnchorEl(event.currentTarget);
  };

  const handleGenresClose = () => {
    setGenresAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: 200,
        height: "100vh",
        backgroundColor: "warning.main",
        color: "black",
        position: "fixed",
        top: 62,
        paddingTop: "10px", // Adjust to the height of your header
        left: 0,
      }}
    >
      <List>
        <ListItem button sx={{ "&:hover": { background: 'white' } }}>
          <ListItemIcon>
            <HomeIcon sx={{ blockSize: 30, color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button sx={{ "&:hover": { background: 'white' } }}>
          <ListItemIcon>
            <InfoIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button onClick={handleGenresClick} sx={{ "&:hover": { background: 'white' } }}>
          <ListItemIcon>
            <WorkIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Genres" />
          <ArrowDropDownIcon />
        </ListItem>
        <Menu
          anchorEl={genresAnchorEl}
          open={Boolean(genresAnchorEl)}
          onClose={handleGenresClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{ mt: '36px', ml: '12px' }} // Adjust this if needed
        >
          <MenuItem onClick={handleGenresClose}>
            <ListItemIcon>
              <MovieIcon sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary="Action" />
          </MenuItem>
          <MenuItem onClick={handleGenresClose}>
            <ListItemIcon>
              <MovieIcon sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary="Comedy" />
          </MenuItem>
        </Menu>
      </List>
    </Box>
  );
};

export default Sidebar2;
