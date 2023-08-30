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


export const NewUser = () => {
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
            Créer un compte
          </Typography>
        
        < Box component="form" sx={{'& > :not(style)': { m: 3, width: '12ch' },display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', justifyContent:'center'}} noValidate autoComplete="off"  >

            <Grid container spacing={2} style={{display:'flex', justifyContent:'center', '& > :not(style)': { m: 3, width: '12ch' }}} >
            <Grid item xs={12} sm={6}>
                <TextField id="Nom" label="Nom" color="success" sx={{ input: { color: 'white' } }} required focused fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="Prenom" label="Prénom" color="success" sx={{ input: { color: 'white' } }} required focused fullWidth/>
            </Grid>
            <Grid item xs={12} >
                <TextField id="email" label="Adresse Email" color="success" sx={{ input: { color: 'white' } }} required focused fullWidth/>
            </Grid>
            <Grid item xs={12} >
                <TextField id="password" label="Mot de passe" color="success" sx={{ input: { color: 'white' } }} required focused fullWidth/>
            </Grid>
            </Grid>
            <Stack spacing={2} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button onClick={() => navigate('/')} type="submit" variant="contained" color="success" fullWidth >
              Créer le compte
            </Button>
            </Stack>
        </Box>
        </Box>
      </div>
    </div>    
  );
}