import { GridColumnHeaderParams, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';

const columnsDraft: GridColDef[] = [
  {
    field: 'col1',
    headerName: 'API key used',
    width: 400,
    renderHeader(params) {
      return (
        <strong className='font-semibold'>{params.colDef.headerName}</strong>
      );
    }
  },
  { field: 'col2', headerName: 'Path', width: 250 },
  { field: 'col3', headerName: 'Recency', width: 250 },
  { field: 'col4', headerName: 'Duration', width: 250 },
  { field: 'col5', headerName: 'Status', width: 250 }
];

const columns = columnsDraft.map((col) => {
  if (col.field === 'col1') {
    return col;
  }

  return {
    ...col,
    renderHeader(params: GridColumnHeaderParams<any, any, any>) {
      return (
        <strong className='font-semibold'>
          {params.colDef.headerName} 🔑{' '}
        </strong>
      );
    }
  };
});

interface TableProps {}

const Table: FC<TableProps> = ({ userRequests }) => {
  return <div>Table</div>;
};

export default Table;
