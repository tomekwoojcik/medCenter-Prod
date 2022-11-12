import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@material-ui/core/TextField';


function Calendar({ children }) {
    const change = () => {

    }
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            {children}
        </LocalizationProvider>
    );
}


export default Calendar;