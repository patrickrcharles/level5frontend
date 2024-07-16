import { Grid } from '@mui/material';

export default function Content({
  children,
  pageName,
  headerComponentRight,
  headerComponentLeft
}: {
  children: React.ReactNode;
  pageName: string;
  headerComponentRight?: React.ReactNode;
  headerComponentLeft?: React.ReactNode;
}) {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={10} container alignItems="center" spacing={3}>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="center" gap={5}>
          <h3 style={{ display: 'inline-block' }}>{pageName}</h3>
          {headerComponentLeft}
        </Grid>

        <Grid item xs={6} container justifyContent="flex-end" alignItems="center" gap={5}>
          {headerComponentRight}
        </Grid>
      </Grid>

      <Grid container item spacing={2} xs={11} justifyContent="center">
        {children}
      </Grid>
    </Grid>
  );
}

// <Grid container justifyContent="center" spacing={2}>
//       <Grid item xs={10} container alignItems="center" spacing={3}>
//         <Grid item xs={6}>
//           <h3>Master Work Schedule Lines</h3>
//         </Grid>

//         <Grid item xs={6} container justifyContent="flex-end" alignItems="center" gap={5}>
//           <SacSlider setLoading={setLoading} />
//           <ButtonLink to="mwslin/new" variant="contained" sx={{ height: '3.5vh' }}>
//             Add Mwslin
//           </ButtonLink>
//         </Grid>
//       </Grid>
