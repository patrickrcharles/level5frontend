import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CharacterCard from './CharacterCard';
import img_dblood from './images/characters/dblood.png'




export default function Characters() {

  const characterData =
    [
      {
        id: 1,
        name: "Dr Blood",
        description: "",
        image: '/images/characters/dblood.png'
      },
      {
        id: 1,
        name: "Dr Blood",
        description: "",
        image: '/images/characters/dblood.png'
      },
      {
        id: 1,
        name: "Dr Blood",
        description: "",
        image: '/images/characters/dblood.png'
      },
      {
        id: 1,
        name: "Dr Blood",
        description: "",
        image: '/images/characters/dblood.png'
      },
      {
        id: 1,
        name: "Dr Blood",
        description: "",
        image: '/images/characters/dblood.png'
      },
      {
        id: 1,
        name: "Dr Blood",
        description: "",
        image: '/images/characters/dblood.png'
      },
      {
        id: 1,
        name: "Dr Blood",
        description: "",
        image: '/images/characters/dblood.png'
      },
      {
        id: 1,
        name: "Dr Blood",
        description: "",
        image: '/images/characters/dblood.png'
      },
      
      
    ]

  const params = useParams();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Grid item container xs={12} spacing={2} columnSpacing={2}>
        { characterData.map((item) =>(
          <Grid item container  xs={3}>
          <CharacterCard title={item.name} name={item.name} description={item.description} image={item.image}/>
          </Grid>)
      )}
      </Grid>
    </>
  );
}
