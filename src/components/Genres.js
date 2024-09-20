import MovieIcon from "@mui/icons-material/Movie";
import{Collapse} from "@mui/material"

<Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
<List component="div" disablePadding>
  <ListItem button onClick={actionMovies} sx={{ pl: 4 }}>
    <ListItemIcon>
      <MovieIcon sx={{ color: "black" }} />
    </ListItemIcon>
    <ListItemText primary="Action" />
  </ListItem>
  <ListItem button  onClick={comedyMovies} sx={{ pl: 4 }}>
    <ListItemIcon>
      <MovieIcon sx={{ color: "black" }} />
    </ListItemIcon>
    <ListItemText primary="Comedy" />
  </ListItem>
  <ListItem button onClick={dramaMovies} sx={{ pl: 4 }}>
    <ListItemIcon>
      <MovieIcon sx={{ color: "black" }} />
    </ListItemIcon>
    <ListItemText primary="Drama" />
  </ListItem>
  <ListItem button onClick={horrorMovies} sx={{ pl: 4 }}>
    <ListItemIcon>
      <MovieIcon sx={{ color: "black" }} />
    </ListItemIcon>
    <ListItemText primary="Horror" />
  </ListItem>
  <ListItem button onClick={scifiMovies} sx={{ pl: 4 }}>
    <ListItemIcon>
      <MovieIcon sx={{ color: "black" }} />
    </ListItemIcon>
    <ListItemText primary="Sci-Fi" />
  </ListItem>
</List>
</Collapse>
