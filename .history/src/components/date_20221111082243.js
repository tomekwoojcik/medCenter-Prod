import React from 'react';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';


function Calendar({ children }) {
    const [value, setValue] = useState({})
    let today = new Date;

    const [ampm, setAmpm] = React.useState(undefined);
    const [ampmOption, setAmpmOption] = React.useState('undefined');

    const selectAmpm = (event) => {
        setAmpm(ampmOptions[event.target.value]);
        setAmpmOption(event.target.value);
    };


    console.log(value);
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

            />
        </LocalizationProvider>)
}


export default Calendar;