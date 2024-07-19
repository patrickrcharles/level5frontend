import { Button, ButtonGroup, Chip, Grid, useTheme } from '@mui/material';
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
import MainNavBar from '../Components/MainNavBar';

const columns: GridColDef[] = [
    {
      field: 'id',
    },
    { field: 'userid', headerName: 'user id', flex: 1 },
    { field: 'username', headerName: 'user name', flex: 1 },
  ];
  
export default async function Home() {

  const loaderData = await fetchHighscores(); 
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
    <Content
      pageName="Recent Scores"
      headerComponentRight={
        <>
          <ButtonLink to="mwslin/new" variant="contained" sx={{ height: '3.5vh' }}>
            Add Mwslin
          </ButtonLink>
        </>
      }
    >
      <Grid item xs={12}>
        <SearchBar
          placeHolder="Search for Game mode, character, level, etc"
          onInput={debounce(searchSummaries, 250)}
        />
      </Grid>

      <Grid item xs={12} sx={{ height: '75vh' }}>
        <DataTable
          columns={columns}
          data={loaderData}
          onPaginationChange={debounce(onPaginationChange, 250)}
          loading={loading}
          setLoading={setLoading}
        />
      </Grid>
      <MainNavBar/>
    </Content>
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
