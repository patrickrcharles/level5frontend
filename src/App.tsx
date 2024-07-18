import Box from '@mui/material/Box';
import { Button, CardMedia, Grid } from '@mui/material';
import HighScoreApi from './api/HighScoreApi';
import MainNavBar from './Components/MainNavBar';
import Home from './Views/Home';
import ScoresTable from './Components/ScoresTable';

export default function App() {

  // call api
  // fetchHighscores();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <MainNavBar /> */}
      <Grid container sx={{ padding: "1em 1em 0 1em" }}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item alignContent={'center'}>
          <Button onClick={() => {
            // alert('clicked');
          }}>
            <CardMedia
              component="img"
              height="500"
              image={`/images/logo.png`}
              alt={"name"}
              title={"title"}
              sx={{ padding: "0em 0em 0 0em" }} />
          </Button>
        </Grid>
      </Grid>
      <Box>
        {/* <ScoresTable /> */}
      </Box >
    </Box>
  );
}
async function fetchHighscores(this: any) {
  return HighScoreApi.get();
}

