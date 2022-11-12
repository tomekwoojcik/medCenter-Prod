import React from 'react';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';


function Calendar({ children }) {
    const [dataValue, setDataValue] = useState({})
    const [timeValue, setTimeValue] = useState({})

    let today = new Date;

    // const [ampm, setAmpm] = React.useState(undefined);
    // const [ampmOption, setAmpmOption] = React.useState('undefined');

    // const selectAmpm = (event) => {
    //     setAmpm(ampmOptions[event.target.value]);
    //     setAmpmOption(event.target.value);
    // };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Wybierz dzień wizyty"
                value={dataValue}
                onChange={(newDataValue) => {
                    setDataValue(newDataValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                toolbarFormat='MM/DD/YY HH:mm:ss'
                minDateTime={dayjs(today)}

            />
            <TimePicker
                label="Wybierz dzień wizyty"
                value={timeValue}
                onChange={(newTimeValue) => {
                    setTimeValue(newTimeValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                toolbarFormat='MM/DD/YY HH:mm:ss'
                minDateTime={dayjs(today)}

            />
        </LocalizationProvider>)
}


export default Calendar;