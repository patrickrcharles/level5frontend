import { Box, Grid, Paper, Stack, styled } from '@mui/material'
import { debounce } from 'lodash'
import React from 'react'
import ButtonLink from './ButtonLink'
import Content from './Content'
import DataTable from './DataTable'
import SearchBar from './SearchBar'
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useParams } from 'react-router-dom'

// const TablePaper = styled(Paper) => ({
//   padding: theme.spacing(2),
//   ...theme.typography.body2,
//   textAlign: 'center',
// }));

const ScoresTable = () => {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    fetch('http://api.sweatthis.com/api/highscores')
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])
  const columns = [
    { field: 'date', headerName: 'date', flex: 1 }, { field: 'version', headerName: 'version', flex: 1 },
    { field: 'username', headerName: 'user', flex: 1 },
    { field: 'character', headerName: 'character', flex: 1 },
    { field: 'level', headerName: 'level', flex: 1 },
    { field: 'modeName', headerName: 'mode', flex: 1 },
    { field: 'time', headerName: 'time', flex: 1 },
    { field: 'longestShot', headerName: 'longest', flex: 1 },
    { field: 'totalDistance', headerName: 'total distance', flex: 1 },
    // { field: 'platform', headerName: 'platform', flex: 1},
    { field: 'maxShotMade', headerName: 'made', flex: 1 },
    { field: 'maxShotAtt', headerName: 'attempts', flex: 1 },
    { field: 'consecutiveShots', headerName: ' consecutive', flex: 1 },
    { field: 'hardcoreEnabled', headerName: 'hardcore', flex: 1 },
    { field: 'enemiesEnabled', headerName: 'enemies', flex: 1 },
    { field: 'trafficEnabled', headerName: 'traffic', flex: 1 },
    { field: 'sniperEnabled', headerName: 'sniper', flex: 1 },
    { field: 'enemiesKilled', headerName: 'nerds bashed', flex: 1 },
  ]
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 50,
    page: 0,
  });

  return (
    <Paper square={false}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
              // autoHeight
              autosizeOnMount
              disableColumnSelector
              rows={tableData}
              columns={columns}
              paginationModel={paginationModel}
              columnBufferPx={100}
              onPaginationModelChange={setPaginationModel}
              {...tableData}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}


export default ScoresTable

function useDemoData(arg0: { dataSet: string; rowLength: number; maxColumns: number }): { data: any } {
  throw new Error('Function not implemented.')
}
