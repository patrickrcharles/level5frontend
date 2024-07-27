import { Box, Button, ButtonGroup, Chip, Grid, Typography, useTheme } from '@mui/material';
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import PushPinIcon from '@mui/icons-material/PushPin';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Params, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import Content from '../Components/Content';
import ButtonLink from '../Components/ButtonLink';
import SearchBar from '../Components/SearchBar';
import DataTable from '../Components/DataTable';
import HighScoreApi from '../api/HighScoreApi';
import ReactPlayer from 'react-player';
import dbPlay from '/video/db_playGame.mp4'
import dbFootage from '/video/db_footage.mp4'
import ScoresTable from '../Components/ScoresTable';
import MainNavBar from '../Components/MainNavBar';

const columns: GridColDef[] = [
  {
    field: 'id',
  },
  { field: 'userid', headerName: 'user id', flex: 1 },
  { field: 'username', headerName: 'user name', flex: 1 },
];

export default function Home() {

  const loaderData = fetchHighscores();
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);

  const searchSummaries = useCallback(
    (filter: string) => {
      setLoading(true);
      if (!filter) {
        return navigate('/', { replace: true });
      }
      return navigate(getUrlWithParams({ params, newFilter: filter }), { replace: true });
    },
    [navigate, params]
  );

  const onPaginationChange = (model: GridPaginationModel) => {
    navigate(getUrlWithParams({ params, model }), { replace: true });
  };

  return (

    <>
      <Grid>
        <MainNavBar />
        {/* <ReactPlayer controls autostart autoPlay url={dbPlay} />
      <ReactPlayer controls autostart autoPlay url={dbFootage} /> */}
      </Grid>
      <Grid item container xs={12}>
        {/* <Grid item xs={1} spacing={0}>
          <Typography> Server Status</Typography>
        </Grid>
        <Grid item xs={1} spacing={2}>
          <Chip label='Down' color="error" />
        </Grid> */}
        {/* <Box
          sx={{
            mr: 6,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
        </Box>
        <Grid item container xs={4}>
          <Grid item xs={3} spacing={1}>
            <Typography> Current Version</Typography>
          </Grid>
          <Grid item xs={2} spacing={1}>
            <Chip label='4.0.0' color="success" />
          </Grid>
        </Grid> */}
      </Grid>
      <Box>
        <ScoresTable />
      </Box>

    </>

  );
}

async function fetchHighscores(this: any) {
  return HighScoreApi.get();
}

function getUrlWithParams({
  params,
  model,
  newFilter
}: {
  params: Readonly<Params<string>>;
  model?: GridPaginationModel;
  newFilter?: string;
}) {
  let { sac, page, size, property, filter } = params;

  sac = sac ? `/sac/${sac}/` : '';
  page = page ? `/page/${page}/` : '';
  size = size ? `/size/${size}/` : '';
  property = property ? `/property/${property}/` : '';
  filter = filter ? `/filter/${filter}` : '';

  // page, size changed
  if (model) {
    page = model.page ? `/page/${model.page}/` : '';
    size = model.pageSize ? `/size/${model.pageSize}/` : '';
  }

  // filter changed
  if (newFilter) {
    property = `/property/${getSearchProperty(newFilter)}/`;
    filter = newFilter ? `/filter/${newFilter}` : '';
    page = '';
  }

  return `/mwslin/search${sac}${page}${size}${property}${filter}`.replace(/\/\//g, '/');
}

// improve search
function getSearchProperty(filter: string) {
  let property = 'id';
  const { length } = filter;

  if (length >= 1 && length < 4) {
    property = 'mwslin';
  } else if (length === 4) {
    // could be mwslin or year

    const yearOffset = 8;
    const possibleYear = Number(filter);
    const curYear = new Date().getFullYear();

    if (possibleYear && Math.abs(curYear - possibleYear) <= yearOffset) {
      property = 'year';
    } else {
      property = 'mwslin';
    }
  } else if (length === 5) {
    property = 'mwslin';
  } else {
    property = 'nsn';
  }

  return property;
}


