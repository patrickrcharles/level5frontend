import Box from '@mui/material/Box';
import { CardMedia, Grid } from '@mui/material';
import HighScoreApi from './api/HighScoreApi';

export default function App() {

  // call api
  fetchHighscores();
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
async function fetchHighscores(this: any) {
  return HighScoreApi.get();
}

