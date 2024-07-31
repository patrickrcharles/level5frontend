import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function CharacterCard() {


    return (
        <>
            <Grid item container xs={12} alignContent="left" justifyContent="left" spacing={2}>
                <Grid item  alignContent="left" justifyContent="left" >
                    <Card sx={{ maxWidth: 300 }} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={`/images/characters/radtony.png`}
                                //   image={`/images/logo.png`}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Rad Tony
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    bad to the bone
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  alignContent="left" justifyContent="left">
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={`/images/characters/danrussell.png`}
                                //   image={`/images/logo.png`}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Dan Russell
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    bad to the bone
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  alignContent="left" justifyContent="left">
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={`/images/characters/dblood.png`}
                                //   image={`/images/logo.png`}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Dr Blood
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    bad to the bone
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid >
            </Grid>
        </>

    );
}
