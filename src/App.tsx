import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper, { paperClasses } from '@mui/material/Paper';
import { CardMedia, Grid } from '@mui/material';

export default function App() {

  // call api
  fetchHighscores();
  console.log("hello");
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container sx={{ padding: "1em 1em 0 1em" }}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item alignContent={'center'} >
          <CardMedia
            component="img"
            height="500"
            image={`/images/logo.png`}
            alt={"name"}
            title={"title"}
            sx={{ padding: "0em 0em 0 0em" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
async function fetchHighscores() {

//   const headers = {'Content-Type':'application/json',
//     'Access-Control-Allow-Origin':'*',
//     'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
// const response = {
// statusCode: 200,
// headers:headers,
// body: JSON.stringify(X),
// };
// return response;

  console.log("fetchHighscores");
    const response = await fetch('https://api.sweatthis.com/api/weather');
    console.log("response: ", response);
    const data = await response.json();
    console.log("data: ", data);
    return data;
}

