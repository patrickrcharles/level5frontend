import { Box, Button, ButtonGroup, CardMedia, Chip, Grid, useTheme } from '@mui/material';
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import PushPinIcon from '@mui/icons-material/PushPin';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, Params, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import Content from '../Components/Content';
import ButtonLink from '../Components/ButtonLink';
import SearchBar from '../Components/SearchBar';
import DataTable from '../Components/DataTable';
import HighScoreApi from '../api/HighScoreApi';
import MainNavBar from '../Components/MainNavBar';

const columns: GridColDef[] = [
    {
      field: 'id',
    },
    { field: 'userid', headerName: 'user id', flex: 1 },
    { field: 'username', headerName: 'user name', flex: 1 },
  ];
  
export default function Title() {

  const loaderData = fetchHighscores(); 
//   const loaderData =  HighScoreApi.get();
  console.log("--------", loaderData);
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
    <Box sx={{ flexGrow: 1 }}>
      {/* <MainNavBar /> */}
      <Grid container sx={{ padding: "1em 1em 0 1em" }}
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item alignContent={'center'}>
          <Link to="/level5">
          {/* <Button onClick={() => {
            // alert('clicked');
          }}> */}
          <CardMedia
            component="img"
            height="500"
            image={`/images/logo.png`}
            alt={"name"}
            title={"title"}
            sx={{ padding: "0em 0em 0 0em" }} />
          {/* </Button> */}
          </Link>
        </Grid>
        {/* <MainNavBar/> */}
        {/* <Grid>
          <ReactPlayer controls autostart autoPlay url={dbPlay} />
          <ReactPlayer controls autostart autoPlay url={dbFootage} />
        </Grid> */}
      </Grid>
      {/* <Box>
        <ScoresTable />
      </Box >  */}
      
    </Box>
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

function GetPinIcon({ param }: { param: { value: boolean } }) {
  const theme = useTheme();
  let color = theme.palette.mode === 'light' ? 'black' : 'gray';
  if (param && param.value) {
    color = 'red';
  }
  return <PushPinIcon htmlColor={color} />;
}
