
import React, { useState } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import heLocale from "date-fns/locale/he";

export function TimelineDatesChange({ onSubmit, onCancel, currStation }) {
    const today = new Date(currStation.date);
    let tomorrow = new Date(currStation.date);
    const now = new Date(currStation.date);
    now.setDate(now.getDate() + 1);
    tomorrow.setDate(today.getDate() + 1);

    const [futureDate, setFutureDate] = useState(tomorrow);

    const handleChange = (date) => {
        now.setHours(0, 0, 0, 0);
        setFutureDate(!(date < now) ? date : tomorrow);
    }

    return (
        <>
            <div className="date-picker-container flex justify-center column">
                <div className="flex justify-center">
                    <MuiPickersUtilsProvider locale={heLocale} utils={DateFnsUtils}>
                        <DatePicker
                            autoOk
                            variant="static"
                            value={futureDate}
                            openTo="date"
                            color='white'
                            onChange={handleChange} />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="btn-container flex column  align-center">
                    <button className="primary-btn" onClick={() => onSubmit(futureDate)}>שמירה</button>
                    <button className="secondary-btn" onClick={() => onCancel()}>יציאה</button>
                </div>
            </div>
        </>
    )
}

