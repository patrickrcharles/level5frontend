import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { ImageList, ImageListItem } from '@mui/material';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {/* {'Copyright © '} */}
      <Link color="inherit" href="https://mui.com/">
        Skeleton District
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
      <Container sx={{justify: "center",alignItems: "center" }}>
        <Box >
          <img src={`/images/logo.png`}  />
        </Box>
      </Container>
  );
}
