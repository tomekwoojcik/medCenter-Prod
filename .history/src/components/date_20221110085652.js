import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

function Calendar({ children }) {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            {children}
            <DatePicker></DatePicker>
        </LocalizationProvider>
    );
}


export default Calendar;