import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function Calendar({ children }) {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            {children}
        </LocalizationProvider>
    );
}


export default Calendar;