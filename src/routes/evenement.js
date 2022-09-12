import { DataGrid } from "@mui/x-data-grid";
import events from "../data/fakeEvents";
import { useState } from 'react'
import { Chip, Stack, Button, Box } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { GridActionsCellItem } from '@mui/x-data-grid';

const Evenement = () => {

  const [gridRows, setgridRows] = useState(events);
  const navigate = useNavigate();

  const handleDoubleClick = (params, event, details) => {
    const eventID = params.row.id;
    navigate(`/evenement/${eventID}`)
  }

  const gridColumns = [
    { field: "id", headerName: "ID Evenement", width: 150 },
    { field: "title", headerName: "Titre", width: 300 },
    { field: "start_date", headerName: "Débute le" },
    { field: "end_date", headerName: "Se Termine le" },
    {
      field: "tags", headerName: "Tags", width: 200,
      renderCell: (params) => (<Chip label={params.value} variant="outlined" color="info" clickable />)
    },
    { field: "location", headerName: "Endroit", width: 250 },
    {
      field: 'actions',
      type: 'actions',
      headerName : "Actions",
      getActions: (params) => [
        <GridActionsCellItem icon={<EditIcon/>} onClick={(p) => navigate(`edit/${params.row.id}`)} label="Edit" />
      ]
    }
  ];
  return (
    <>
      <Stack direction="row" gap={2} sx={{ m: 1, justifyContent: "flex-end" }}>
        <Button variant="contained" color="success">Add Event</Button>
        <Button variant="contained" color="error">Delete Event</Button>
      </Stack> 
      <DataGrid
        checkboxSelection
        rows={gridRows}
        columns={gridColumns}
        onRowDoubleClick={handleDoubleClick}
      />
    </>
  );
};
export default Evenement;