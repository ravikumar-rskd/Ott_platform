import React,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import MovieListGenres from './components/MovieListGenre';
import MovieDetailsGenre from './components/MovieDetailsGenres';
import SearchAppBar from './components/SearchAppBar';
import LoginForm from './components/LoginPage';
import RegisterForm from './components/RegisterPage';
import './components/AuthForms.css';
// import UserPage from './components/User';


function App() {
  const [isRegister, setIsRegister] = useState(true);
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const [sideBarOpen,setsideBarOpen]=useState(false);
  
    const sideBar=()=>{
      return(
        setsideBarOpen(!sideBarOpen)
      )
    }
  
  
    const handleRegister = (email, password) => {
      setUsers([...users, { email, password }]);
      setIsRegister(false);
      alert('Registration successful! Please log in.');
    };
  
    const handleLogin = (email, password) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setLoggedInUser(user);
        alert('Login successful!');
      } else {
        alert('Invalid email or password.');
      }
    };
  return (
    <div className="App auth-container">
      {loggedInUser ? (
        <div>
          <SearchAppBar sideBarOpen={sideBarOpen} sideBar={sideBar}/>
        <Box display={'flex'} 
        sx={{overflow:'auto'
        }} >
         <Grid container padding={1} flexGrow={1}>
            <Grid item xs={12} sm={9} >
              <Routes>
                <Route path="/" element={<MovieListGenres />} />
                <Route path="/movie/:id" element={<MovieDetailsGenre />} />
              </Routes>
            </Grid>
           </Grid>
        </Box>
      
        </div>
      ) : isRegister ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      {!loggedInUser && (
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Go to Login' : 'Go to Register'}
        </button>
      )}
    </div>
 
  );
}

export default App;