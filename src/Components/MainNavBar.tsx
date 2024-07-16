import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, SxProps, Theme, Typography, useTheme } from '@mui/material';
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
                to: '/maintenance/tamcn-list'
            },
            {
                name: 'High Scores',
                to: '/maintenance/nsn-list'
            },
            {
                name: 'All Time Scores',
                to: '/maintenance/mwslin-archive'
            },
            {
                name: 'All Time Leaders',
                to: '/maintenance/mwslin-archive'
            }
        ]
    },
    {
        id: 'Users',
        children: [
            {
                name: 'TAMCN Summary',
                to: '/report/tamcn-summary'
            },
        ]
    },
    // {
    //     id: 'Admin',
    //     children: [
    //         {
    //             name: 'Account Management',
    //             to: '/admin/account-management'
    //         },
    //         {
    //             name: 'File Management',
    //             to: '/admin/file-management'
    //         },
    //         {
    //             name: 'System Configuration',
    //             to: '/admin/system-configuration'
    //         },
    //         {
    //             name: 'MWSLIN Archive',
    //             to: '/admin/mwslin-archive'
    //         },
    //         {
    //             name: 'Send Email',
    //             to: '/admin/send-email'
    //         }
    //     ]
    // },
    {
        id: 'Help',
        children: [
            {
                name: 'About',
                to: '/help/update-history'
            }
        ]
    }
];

export default function MainNavBar() {
    const theme = useTheme();

    return (
        <AppBar sx={style}>
            <Toolbar>
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
                    Level 5
                </ButtonLink>
                {
                    menus.map((item) => (
                        <DropdownBtn key={uuidv4()} menu={item} sx={{ fontWeight: 'bolder', fontSize: '1.1em' }} />
                    ))}
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
