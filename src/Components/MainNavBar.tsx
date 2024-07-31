import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, Chip, Grid, SxProps, Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Theme, Typography, useTheme } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import DropdownBtn from './DropdownBtn';
import ButtonLink from './ButtonLink';
import ApplicationApi from '../api/ApplicationApi';
import { SetStateAction, useEffect, useState } from 'react';

const style: SxProps<Theme> = {
    color: 'text.primary',
    backgroundImage: 'none',
    backgroundColor: 'background.default',
    boxShadow: 'none',
    position: 'unset'
};

const menus: DropMenuType[] = [
    {
        id: 'Scores',
        children: [
            {
                name: 'Recent Scores',
                to: '/level5/recent'
            },
            {
                name: 'High Scores',
                to: '/level5/high'
            },
            {
                name: 'All Time Scores',
                to: '/level5/alltime'
            },
            {
                name: 'All Time Leaders',
                to: '/level5/alltimeleaders'
            }
        ]
    },
];


export default function MainNavBar() {
    // const theme = useTheme();
    // const v = ApplicationApi.getCurrentVersion();
    // const current =  (await v).currentVersion;
    // console.log("versions", ApplicationApi.getVersions());
    // console.log("----------- current", v);
    // let version ='';
    const [currentVersion, setCurrentVersion] = useState([]);
    const version = ApplicationApi.getCurrentVersion();
    // // fetch highscores data
    useEffect(() => {
        const fetchData = async () => {
            const data = await ApplicationApi.getCurrentVersion();
            return data;
        };
        fetchData().then((data) => setCurrentVersion(data));
        // console.log("currentVersion : ",currentVersion);
    }, []);

    return (
        <AppBar sx={style}>
            <Toolbar>
                <Grid item container xs={12}>
                    <Grid item container xs={6} justifyContent="left" direction="row">
                        {/* <Box
                            sx={{
                                mr: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row'
                            }}
                        >
                        </Box> */}
                        <ButtonLink to="/" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                            Title
                        </ButtonLink>
                        <ButtonLink to="/level5" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                            Scores
                        </ButtonLink>
                        <ButtonLink to="/level5/characters" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                            Characters
                        </ButtonLink>
                        <ButtonLink to="/level5/drblood" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                            Dr Blood
                        </ButtonLink>
                    </Grid>
                    <Grid item container xs={6} justifyContent="right" direction="row">
                        <Table sx={{
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: "none"
                            }
                        }}>
                            <TableBody
                            ><TableRow>
                                    <TableCell align='right'><Typography> Current Version</Typography>
                                    </TableCell>
                                    <TableCell align='left'><Chip label={currentVersion} color="success" />
                                    </TableCell>
                                    {/* <TableCell align='right'><Typography> Server Status</Typography>
                                    </TableCell>
                                    <TableCell align='left'><Chip label='Online' color="success" />
                                    </TableCell> */}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

// function stringToColor(string: string) {
//     let hash = 0;
//     let i;

//     /* eslint-disable no-bitwise */
//     for (i = 0; i < string.length; i += 1) {
//         hash = string.charCodeAt(i) + ((hash << 5) - hash);
//     }

//     let color = '#';

//     for (i = 0; i < 3; i += 1) {
//         const value = (hash >> (i * 8)) & 0xff;
//         color += `00${value.toString(16)}`.slice(-2);
//     }
//     /* eslint-enable no-bitwise */

//     return color;
// }

// function stringAvatar(name: string) {
//     return {
//         sx: {
//             backgroundColor: stringToColor(name)
//         },
//         children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
//     };
// }
