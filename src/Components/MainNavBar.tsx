import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, Chip, Grid, SxProps, Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Theme, Typography, useTheme } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import DropdownBtn from './DropdownBtn';
import ButtonLink from './ButtonLink';

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
    const theme = useTheme();

    return (
        <AppBar sx={style}>
            <Toolbar>
                <Grid item container xs={12}>
                    <Grid item container xs={6} justifyContent="left" direction="row">
                        <Box
                            sx={{
                                mr: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row'
                            }}
                        >
                        </Box>
                        <ButtonLink to="/" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                            Title
                        </ButtonLink>
                        <ButtonLink to="/level5" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                            Scores
                        </ButtonLink>
                        {/* {
                    menus.map((item) => (
                        <DropdownBtn key={uuidv4()} menu={item} sx={{ fontWeight: 'bolder', fontSize: '1.1em' }} />
                    ))} */}
                        {/* <ButtonLink to="/modes" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                    Modes
                </ButtonLink>
                <ButtonLink to="/characters" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                    Characters
                </ButtonLink>
                <ButtonLink to="/levels" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                    Levels
                </ButtonLink> */}
                        <ButtonLink to="/level5/drblood" sx={{ fontWeight: 'bolder', fontSize: '1.1em' }}>
                            Meet Dr Blood
                        </ButtonLink>
                    </Grid>
                    <Grid item container xs={6} justifyContent="right" direction="row">
                        <Table sx={{
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: "none"
                            }
                        }}>
                            <TableCell align='right'><Typography> Current Version</Typography></TableCell>
                            <TableCell align='left'><Chip label='4.0.0' color="success" /></TableCell>
                        </Table>
                        {/* <Grid item xs={1} spacing={1}>
                        
                    </Grid>
                    <Grid item xs={2} spacing={1}>
                        
                    </Grid> */}
                    </Grid>
                    </Grid>
            </Toolbar>
        </AppBar>
    );
}

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            backgroundColor: stringToColor(name)
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
}
