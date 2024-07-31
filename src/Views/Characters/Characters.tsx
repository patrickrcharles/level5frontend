import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CharacterCard from './CharacterCard';

const columns: GridColDef[] = [
  {
    field: 'id',
  },
  { field: 'userid', headerName: 'user id', flex: 1 },
  { field: 'username', headerName: 'user name', flex: 1 },
];

export default function Characters() {

  const params = useParams();
  const [loading, setLoading] = useState(true);

  return (

    <>
      <Grid>
      <CharacterCard/>
      </Grid>
    </>

  );
}
