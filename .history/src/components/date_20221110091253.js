import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@material-ui/core/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function Calendar({ children }) {
    let value;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>)
}


export default Calendar;