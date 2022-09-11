import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SimpleDatePicker from './SimpleDatePicker';
import EditIcon from '@mui/icons-material/Edit';


export default function FormDialog({ person, modifyPerson }) {
    const [open, setOpen] = React.useState(false);

    const emailRef = React.useRef(null);
    const dateNRef = React.useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        modifyPerson({
            ...person,
            email: emailRef.current.value,
            birthday: new Date(dateNRef.current.value),
        });
    };

    return (
        <div>
            <Button startIcon={<EditIcon />} variant="outlined" onClick={handleClickOpen}>
                Modifier Profile
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        defaultValue={person.email}
                        inputRef={emailRef}
                    />
                    <SimpleDatePicker defaultValue={person.birthday} inputRef={dateNRef} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save Profile</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
