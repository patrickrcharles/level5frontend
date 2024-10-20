import { Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import HighScoreApi from '../api/HighScoreApi';
import YouTube from 'react-youtube';

export default function DrBlood() {

  const loaderData = fetchHighscores();
  //   const loaderData =  HighScoreApi.get();
  console.log("--------", loaderData);
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);

  return (
        <Grid>
          {/* <ReactPlayer controls autostart autoPlay url={dbPlay} />
          <ReactPlayer controls autostart autoPlay url={dbFootage} /> */}
          <YouTube videoId="TY44PEt4378"/>
          <YouTube videoId="Fx3nlW8gf_Y"/>
          <YouTube videoId="TjtovD-Sb5E"/>
          <YouTube videoId="3Y-kf_PkwZg"/>
          <YouTube videoId="8R8f5mcSj1k"/>
          <YouTube videoId="uaMFY0477uQ"/>
          <YouTube videoId="e2Bx2lv33Yo"/>
          <YouTube videoId="ScO5wpZAvvY"/>
        </Grid>
        
  );
}

async function fetchHighscores(this: any) {
  return HighScoreApi.get();
}

