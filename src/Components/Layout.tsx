import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import MainNavBar from './MainNavBar';
import { useLocation } from 'react-router-dom';

const CUI = 'Controlled Unclassified Information (CUI)';

export default function Layout({ children }: { children: JSX.Element }) {
  const root = "/";
  const location = useLocation().pathname;
  console.log(location);
  return (
    <>
    {/* render navbar if NOT title screen */}
      {location !== root ?
        (
          <Grid id="header">
            <MainNavBar />
          </Grid>
        ) :
        (<Grid />)
      }
      <Grid id="mainContainer">
        <Grid id="scrollableContent">{children}</Grid>
      </Grid>
      <Grid id="footer">
      </Grid>
    </>
  );
}
