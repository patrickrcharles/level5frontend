import { Box, Grid, Paper, Stack, styled, Tooltip, Typography } from '@mui/material'
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

  // fetch highscores data
  useEffect(() => {
    fetch('http://api.sweatthis.com/api/highscores')
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])

  // useEffect(() => {
  //   fetch('http://api.sweatthis.com/api/highscores')
  //     .then((data) => data.json())
  //     .then((data) => setTableData(data))
  //   // console.log(tableData);
  // }, [])

  const columns = [
    { field: 'id', headerName: 'id', flex: 1 },
    { field: 'date', headerName: 'date', flex: 1 },
    { field: 'version', headerName: 'version', flex: 1 },
    { field: 'username', headerName: 'user', flex: 1 },
    { field: 'character', headerName: 'character', flex: 1 },
    { field: 'level', headerName: 'level', flex: 1 },
    { field: 'modeName', headerName: 'mode', flex: 1 },
    { field: 'totalPoints', headerName: 'points', flex: 1 },
    { field: 'time', headerName: 'time', flex: 1 },
    { field: 'longestShot', headerName: 'longest', flex: 1 },
    { field: 'totalDistance', headerName: 'total distance', flex: 1 },
    { field: 'maxShotMade', headerName: 'made', flex: 1 },
    { field: 'maxShotAtt', headerName: 'attempts', flex: 1 },
    { field: 'consecutiveShots', headerName: ' consecutive', flex: 1 },
    { field: 'hardcoreEnabled', headerName: 'hardcore', flex: 1, renderCell: (params: any) => (getValueFromValueOptions(params.row.hardcoreEnabled)), },
    { field: 'enemiesEnabled', headerName: 'enemies', flex: 1, renderCell: (params: any) => (getValueFromValueOptions(params.row.enemiesEnabled)), }, 
    { field: 'enemiesKilled', headerName: 'nerds bashed', flex: 1 },
    { field: 'trafficEnabled', headerName: 'traffic', flex: 1, renderCell: (params: any) => (getValueFromValueOptions(params.row.trafficEnabled)), },
    { field: 'sniperEnabled', headerName: 'sniper', flex: 1, renderCell: (params: any) => (getValueFromValueOptions(params.row.sniperEnabled)), },
    { field: 'p1IsCpu', headerName: 'Vs', flex: 1, renderCell: (params: any) => (getVersusFinishFromValueOptions(params.row)), },
    // { field: 'campaignWins', headerName: 'Campaign Wins', flex: 1}//, renderCell: (params: any) => (getVersusFinishFromValueOptions(params.row)), },
   
  ]
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 50,
    page: 0,
  });

  return (
    <Paper square={false}>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Grid><Typography variant='h6'>Level 5 High Scores</Typography></Grid>
          <Box sx={{ height: 1200, width: '100%' }}>
            {/* <Tooltip title="test"> */}
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
            {/* </Tooltip> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ScoresTable

function getValueFromValueOptions(value: any) {
  // console.log('value', value);
  // if (value == 1) { console.log("---------------------------hard core found") }
  return value === 0 ? 'No' : 'Yes';
}

function getVersusFinishFromValueOptions(row: any) {
  // console.log("row", row);
  // console.log("is winner", row.p1IsCpu);
  // console.log("mode", row.modeid);
  let playerCount = row.numPlayers;
  let playerFinish = 4;
  if (row.modeid !== 23) { return '' }
  if (row.modeid === 23) {
    // if (row.p3IsCpu === 1) { playerCount = 3; }
    // if (row.p4IsCpu === 1) { playerCount = 4; }
    if (row.p1IsCpu === 0) { playerFinish = 1; }
    if (row.p2IsCpu === 0) { playerFinish = 2; }
    if (row.p3IsCpu === 0) { playerFinish = 3; }
    if (row.p4IsCpu === 0) { playerFinish = 4; }
  }
  // console.log(playerFinish," of ",playerCount);
  let message= playerFinish + " of "+ playerCount;
  return message;
}

