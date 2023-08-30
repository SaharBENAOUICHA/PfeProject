import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import ReactDOM from "react-dom/client";
import {useNavigate} from "react-router-dom";
import { BorderAllRounded } from '@mui/icons-material';


export const Login = () => {
    const myStyle={
        backgroundImage: "url('https://sakenticoprod.blob.core.windows.net/media/media/articles/camping%20in%20france/3-imagine-waking-up-to-incredible-views-of-the-french-countryside.jpeg')",
        height:'108vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity : 0.9,
        display:'flex',
        justifyContent:'Center',
        alignItems:'center' 
    };

    const text = {color:'white'}

    const preventDefault = (event) => event.preventDefault();

    const navigate = useNavigate();

  return (
    <div style={myStyle}> 
      <div style={{display:'flex', justifyContent:"center", height:600, width:400, backgroundColor:'black', opacity:0.8, borderRadius : 30}}>
      <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'green' }}>
            <AssignmentIndIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color={'white'}>
            Se connecter
          </Typography>
        
        < Box component="form" sx={{'& > :not(style)': { m: 3, width: '12ch' },display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}} noValidate autoComplete="off"  >

          <TextField id="email" type="email"  label="Adresse Email" color="success" sx={{ input: { color: 'white' } }} required focused />

          <TextField id="password" type="password" label="Mot de passe" color="success" sx={{ input: { color: 'white' } }} required focused />

          <Stack spacing={2} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button onClick={() => navigate('home')} type="submit" variant="contained" color="success" fullWidth >
              Se connecter
            </Button>
          </Stack>

          <Stack spacing={2} direction="column" style={{color:'white'}}>
          <Button onClick={() => navigate('signup')} variant="text" size='small' style={{display:'flex', justifyContent:"flex-start", color:'white'}}>
              Créer un compte
          </Button>
          </Stack>
          
        </Box>
        </Box>
      </div>
    </div>    
  );
  
}
