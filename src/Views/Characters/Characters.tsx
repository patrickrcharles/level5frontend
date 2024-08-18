import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CharacterCard from './CharacterCard';

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
        name: "Dan Russell",
        description: "",
        image: '/images/characters/danrussell.png'
      },
      {
        id: 1,
        name: "???",
        description: "",
        image: '/images/characters/dbloodwhite.png'
      },
      {
        id: 1,
        name: "Evelyn Skeleton",
        description: "",
        image: '/images/characters/eveyln.png'
      },
      {
        id: 1,
        name: "Executioner",
        description: "",
        image: '/images/characters/executioner.png'
      },
      {
        id: 1,
        name: "Jimmy Ford",
        description: "",
        image: '/images/characters/jimmyford.png'
      },
      {
        id: 1,
        name: "Johnny Dracula",
        description: "",
        image: '/images/characters/johnnydracula.png'
      },
      {
        id: 1,
        name: "Marion",
        description: "",
        image: '/images/characters/marion.png'
      },
      {
        id: 1,
        name: "Woody",
        description: "",
        image: '/images/characters/woody.png'
      },
      {
        id: 1,
        name: "Ninja",
        description: "",
        image: '/images/characters/ninja.png'
      },
      {
        id: 1,
        name: "Rad Tony",
        description: "",
        image: '/images/characters/radtony.png'
      },
      {
        id: 1,
        name: "Thom",
        description: "",
        image: '/images/characters/thom.png'
      },
      {
        id: 1,
        name: "Wizard",
        description: "",
        image: '/images/characters/wizard.png'
      },
      // {
      //   id: 1,
      //   name: "Dr Blood",
      //   description: "",
      //   image: '/images/characters/dblood.png'
      // },
      // {
      //   id: 1,
      //   name: "Dr Blood",
      //   description: "",
      //   image: '/images/characters/dblood.png'
      // },
      // {
      //   id: 1,
      //   name: "Dr Blood",
      //   description: "",
      //   image: '/images/characters/dblood.png'
      // },
      
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
