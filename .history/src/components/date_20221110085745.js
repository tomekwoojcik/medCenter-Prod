import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

function Calendar({ children }) {
    const change = () => {

    }
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            {children}
            <DatePicker onChange={change}></DatePicker>
        </LocalizationProvider>
    );
}


export default Calendar;