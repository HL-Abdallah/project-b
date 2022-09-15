import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';

const NewEventStep1 = () => {
    // hooks
    const [data, setData] = useState({
        title: "",
        OneDayEvent: false,
        startDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        location: "",
    })
    // handlers
    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ?
            e.target.checked :
            e.target.value
        const name = e.target.name;

        console.log("name : ", name, " value : ", value);
        if (e.target.type === "checkbox" && value === true) {
            console.log("setting EndDate === StartDate because OneDayEvent is true", data.startDate, data.endDate);
            const newEndDate = data.startDate;
            setData(data => ({ ...data, endDate: newEndDate }));
            console.log("data after first setData() ", data);
        }
        setData(data => ({ ...data, [name]: value }));
        console.log("data after second setData() ", data);
    }

    return (
        <>
            <TextField
                label="Event Title"
                value={data.title}
                onChange={handleChange}
                placeholder="Seminar, Webinar, Presentation ..."
                fullWidth
                name="title"
            />
            <Stack>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={data.OneDayEvent}
                                onChange={handleChange}
                                name="OneDayEvent"
                            />
                        }
                        label="One Day Event ? "
                    />
                </FormGroup>
                <Stack direction={"row"} gap={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={data.startDate}
                            onChange={(value) => {
                                const newVal = new Date(value.$d).toLocaleDateString();
                                setData({ ...data, startDate: newVal })
                            }}
                            label={"start"}
                            renderInput={(params) => <TextField {...params}
                                sx={{ mt: 3, mb: 3 }}
                            />}
                        />
                        <DatePicker
                            value={data.endDate}
                            minDate={new Date(data.startDate)}
                            onChange={(value) => {
                                const newVal = new Date(value.$d).toLocaleDateString();
                                setData({ ...data, endDate: newVal })
                            }}
                            disabled={data.OneDayEvent}
                            label={"end"}
                            renderInput={(params) => <TextField {...params}
                                sx={{ mt: 3, mb: 3 }}
                            />}
                        />
                    </LocalizationProvider>
                </Stack>
                <TextField
                    label="Location"
                    value={data.location}
                    onChange={handleChange}
                    placeholder="Address ex : UBMA University Sidi Ammar Annaba, Algeria."
                    multiline
                    rows={2}
                    name="location"
                />
            </Stack>
        </>
    )
}

export default NewEventStep1