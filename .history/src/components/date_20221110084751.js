import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

function Calendar({ children }) {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            {children}

        </LocalizationProvider>
    );
}


export default Calendar;