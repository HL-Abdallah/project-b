import { DataGrid } from "@mui/x-data-grid";
import events from "../data/fakeEvents";
import { useState } from 'react'
import { Chip } from "@mui/material";


const Evenement = () => {
  const [gridRows, setgridRows] = useState(events);

  const gridColumns = [
    { field: "id", headerName: "ID Evenement", width: 150 },
    { field: "title", headerName: "Titre", width: 300 },
    { field: "start_date", headerName: "Débute le" },
    { field: "end_date", headerName: "Se Termine le" },
    {
      field: "tags", headerName: "Tags", width: 200,
      renderCell: (params) => (<Chip label={params.value} color="info" clickable />)
    },
    { field: "location", headerName: "Endroit", width: 250 },
  ];

  return (
    <>
      <DataGrid rows={gridRows} columns={gridColumns} />
    </>
  );
};

export default Evenement;
