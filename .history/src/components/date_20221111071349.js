import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';


function Calendar({ children }) {
    const [value, setValue] = useState({})
    console.log(value.$d);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Wybierz dzień wizyty"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                minDateTime={dayjs('2022-04-02T12:00')}
            />
        </LocalizationProvider>)
}


export default Calendar;