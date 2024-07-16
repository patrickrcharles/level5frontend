import { SxProps, Theme } from '@mui/material';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridPaginationModel,
  GridValidRowModel,
  useGridApiRef
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const style: SxProps<Theme> = {
  width: '100%',
  padding: 1,
  '.MuiDataGrid-columnHeader, .MuiDataGrid-scrollbarFiller--header': {
    backgroundColor: 'DataTable.headerColor'
  },
  '.MuiDataGrid-row, ': {
    backgroundColor: 'DataTable.rowColor'
  },
  '--DataGrid-rowBorderColor': 'none',
  borderColor: 'borderColor',
  '.MuiDataGrid-scrollbar--horizontal': {
    display: 'block'
  },
  '.MuiDataGrid-scrollbar::-webkit-scrollbar': {
    width: '1em'
  },
  '.MuiDataGrid-scrollbar::-webkit-scrollbar-thumb': {
    backgroundColor: 'DataTable.scrollbarColor',
    borderRadius: '10px'
  },
  '.MuiDataGrid-scrollbar::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'DataTable.scrollbarHoverColor'
  }
};

export default function DataTable({
  columns,
  data,
  onPaginationChange,
  setLoading,
  loading
}: {
  columns: GridColDef[];
  data: Summary;
  onPaginationChange: (model: GridPaginationModel, details: GridCallbackDetails) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}) {
  const { content } = data;
  const [asyncContent, setAsyncContent] = useState<GridValidRowModel[]>([]);
  const location = useLocation();
  const params = useParams();
  const apiRef = useGridApiRef();

  // simulate async data. Bug fix for page render block
  useEffect(() => {
    setAsyncContent(content as GridValidRowModel[]);
    setLoading(false);
  }, [content, setLoading]);

  // reset page
  useEffect(() => {
    // when going to home page
    if (location.pathname === '/') {
      apiRef.current.setPage(0);
    }

    // when filter changes, but page doesn't
    if (params.filter && !params.page) {
      apiRef.current.setPage(0);
    }
  }, [apiRef, location, params.filter, params.page]);

  return (
    <DataGrid
      rows={asyncContent}
      columns={columns}
      rowCount={data.totalElements}
      initialState={{
        pagination: {
          paginationModel: {
            page: data.number,
            pageSize: data.size
          }
        }
      }}
      pageSizeOptions={[15, 30, 60, 100]}
      disableRowSelectionOnClick
      paginationMode="server"
      filterMode="server"
      onPaginationModelChange={(model, details) => {
        if (loading) return;
        setLoading(true);
        onPaginationChange(model, details);
      }}
      sx={style}
      apiRef={apiRef}
      loading={loading}
      onSortModelChange={() => {}}
    />
  );
}
