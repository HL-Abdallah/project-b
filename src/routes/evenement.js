import { DataGrid } from "@mui/x-data-grid";
import events from "../data/fakeEvents";
import { useState } from 'react'
import { Chip, Stack, Button, Box } from "@mui/material";

const Evenement = () => {

  const [gridRows, setgridRows] = useState(events);
  

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
      field: "organised_by", headerName: "Link", width: 250,
      renderCell: (p) => (<a href="/profile" style={{ fontWeight: "bold", color: "inherit", textDecoration: "underline" }}><Chip label={p.value} variant="outlined" color="info" clickable /></a>),
    },
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
      />
    </>
  );
};
export default Evenement;