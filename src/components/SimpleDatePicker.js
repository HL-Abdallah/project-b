import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function SimpleDatePicker({ inputRef, defaultValue }) {
    const [value, setValue] = React.useState(defaultValue);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                inputRef={inputRef}
                label="Date Naissance"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params}
                    sx={{ mt: 3, mb: 3 }}
                />}
            />
        </LocalizationProvider>
    );
}
