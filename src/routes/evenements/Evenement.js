import { DataGrid } from "@mui/x-data-grid";
import events from "../../data/fakeEvents";
import { Chip, Stack, Button, Snackbar, Alert, AlertTitle, Collapse, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Evenement = () => {

  // Hooks
  const gridRows = events;
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);
  const [collapseAlert, setCollapseAlert] = useState(false);
  // Handle functions
  const gridColumns = [
    {
      field: 'actions',
      type: 'actions',
      headerName: "Actions",
      getActions: (params) => [
        <GridActionsCellItem icon={<EditIcon />} onClick={(p) => navigate(`edit/${params.row.id}`)} label="Edit" />
      ]
    },
    { field: "id", headerName: "Event ID", width: 80 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "start_date", headerName: "Start Date" },
    { field: "end_date", headerName: "End Date" },
    {
      field: "tags", headerName: "Tags", width: 200,
      renderCell: (params) => (<Chip label={params.value} variant="outlined" color="info" clickable />)
    },
    { field: "location", headerName: "Location", width: 250 },
  ];

  const handleRowDoubleClick = (params, event, details) => {
    const eventID = params.row.id;
    navigate(`view/${eventID}`)
  }

  const handleRowDelete = () => {
    if (selectionModel.length !== 0) {
      setSnackbarOpen(true);
    } else {
      setCollapseAlert(true);
      setTimeout(() => {
        setCollapseAlert(false);
      }, 2500);
    }
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <>
      <Paper>
        <Stack direction="row" gap={2} sx={{ mt: 1, p: 1, justifyContent: "flex-start", alignItems: "center" }}>
          <Button variant="contained" color="success" startIcon={<AddIcon />} size="small" onClick={() => navigate("new")}>Add Event</Button>
          <Button variant="contained" color="error" startIcon={<DeleteIcon />} size="small" onClick={() => handleRowDelete()}>Delete Event</Button>
        </Stack>
        <Collapse in={collapseAlert}>
          <Alert severity="warning">Cannot Delete — No row is selected</Alert>
        </Collapse>
      </Paper>
      <DataGrid
        checkboxSelection
        disableSelectionOnClick
        rows={gridRows}
        columns={gridColumns}
        onRowDoubleClick={handleRowDoubleClick}
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          action={
            <Button color="inherit" size="small" onClick={(event, reason) => handleSnackbarClose(event, reason)}>
              UNDO
            </Button>
          }
          variant="filled"
          severity="success">
          <AlertTitle>Success</AlertTitle>
          Event(s) deleted successfully{/*  — <strong>ID : [ {selectionModel.map((id) => id + " ")} ]</strong> */}
        </Alert>
      </Snackbar>

    </>
  );
};
export default Evenement;