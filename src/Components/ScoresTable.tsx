import { Grid } from '@mui/material'
import { debounce } from 'lodash'
import React from 'react'
import ButtonLink from './ButtonLink'
import Content from './Content'
import DataTable from './DataTable'
import SearchBar from './SearchBar'
import  { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'


const columns = [
    { field: 'date', headerName: 'date', flex: 1 },  
    { field: 'username', headerName: 'user name', flex: 1},
    { field: 'character', headerName: 'character' , flex: 1},
    { field: 'level', headerName: 'level', flex: 1 },
    { field: 'modeName', headerName: 'mode' , flex: 1},
    { field: 'totalPoints', headerName: 'total points', flex: 1},
    { field: 'platform', headerName: 'platform', flex: 1}
  ]
  
  const ScoresTable = () => {
  
    const [tableData, setTableData] = useState([])
  
    useEffect(() => {
      fetch('http://api.sweatthis.com/api/highscores')
        .then((data) => data.json())
        .then((data) => setTableData(data))
  
    }, [])
  
    console.log(tableData)
  
    return (
      <Grid xs={6}>
        <DataGrid
          rows={tableData}
          columns={columns}
        />
      </Grid>
    )
  }
  

export default ScoresTable