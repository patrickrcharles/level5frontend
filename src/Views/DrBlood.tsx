import { Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import HighScoreApi from '../api/HighScoreApi';
import ReactPlayer from 'react-player';
import dbPlay from '/video/db_playGame.mp4'
import dbFootage from '/video/db_footage.mp4'
  
export default function DrBlood() {

  const loaderData = fetchHighscores(); 
//   const loaderData =  HighScoreApi.get();
  console.log("--------", loaderData);
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);

  return (
        <Grid>
          <ReactPlayer controls autostart autoPlay url={dbPlay} />
          <ReactPlayer controls autostart autoPlay url={dbFootage} />
        </Grid>
  );
}

async function fetchHighscores(this: any) {
    return HighScoreApi.get();
  }

