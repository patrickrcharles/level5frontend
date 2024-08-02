import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react';

export default function CharacterCard(props: { image: string | undefined; title: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {


    return (
        <>
            <Grid item container xs={12} alignContent="left" justifyContent="left" >
                <Grid item  alignContent="left" justifyContent="left" >
                    <Card sx={{ maxWidth: 300 }} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={props.image}
                                alt={props.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"   color="text.primary">
                                    {props.name}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    {props.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>

    );
}
