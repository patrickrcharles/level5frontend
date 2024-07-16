import { Box } from '@mui/material';
import dayjs from 'dayjs';
import MainNavBar from './MainNavBar';

const CUI = 'Controlled Unclassified Information (CUI)';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <div id="header">
        <Box
          className="cui-banner"
          sx={{
            width: '100%',
            backgroundColor: 'CUIBanner.backgroundColor',
            display: 'flex'
          }}
        >
          <span style={{ width: '33.33333%', textAlign: 'left' }} />
          <span style={{ width: '33.33333%', textAlign: 'center' }}>{CUI}</span>
          <span style={{ width: '33.33333%', textAlign: 'right', marginRight: 15 }}>
          </span>
        </Box>

        <MainNavBar />
      </div>

      <div id="mainContainer">
        <div id="scrollableContent">{children}</div>
      </div>

      <div id="footer">
        <Box
          className="cui-banner"
          sx={{
            width: '100%',
            backgroundColor: 'CUIBanner.backgroundColor',
            display: 'flex',
            gridRow: 3
          }}
        >
          <span style={{ width: '33.33333%', textAlign: 'left' }} />
          <span style={{ width: '33.33333%', textAlign: 'center' }}>{CUI}</span>
          {/* <span style={{ width: '33.33333%', textAlign: 'right', marginRight: 15 }}>build: {version}</span> */}
        </Box>
      </div>
    </>
  );
}
