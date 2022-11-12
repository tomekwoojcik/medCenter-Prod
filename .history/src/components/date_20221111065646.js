import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';


function Calendar({ children }) {
    const [value, setValue] = useState()
    console.log(value);
    return (
        // <LocalizationProvider dateAdapter={AdapterDayjs}>
        //     <DatePicker
        //         label="Wybierz dzień wizyty"
        //         value={value}
        //         onChange={(newValue) => {
        //             setValue(newValue);
        //         }}
        //         renderInput={(params) => <TextField {...params} />}
        //     />
        // </LocalizationProvider>)
        <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}


export default Calendar;