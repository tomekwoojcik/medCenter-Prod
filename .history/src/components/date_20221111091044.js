import React from 'react';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UserAuth } from "./context/AuthContext";


function Calendar({ children }) {
    const { value, setValue } = UserAuth();
    let today = new Date;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label="Wybierz dzień wizyty"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                toolbarFormat='MM/DD/YY HH:mm:ss'
                minDateTime={dayjs(today)}
                ampm={false}

            />
        </LocalizationProvider>)
}


export default Calendar;