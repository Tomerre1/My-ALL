import React, { useState } from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import heLocale from "date-fns/locale/he";

export default function DatePicker(props) {

    const { name, label, value, onChange } = props
    const [isOpen, setOpen] = useState(false);


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={heLocale}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                format="dd/MM/yyyy"
                name={name}
                value={value}
                onChange={date => { onChange(convertToDefEventPara(name, date)); setOpen(false); }}
                KeyboardButtonProps={{
                    onFocus: e => {
                        setOpen(true);
                    }
                }}
                PopoverProps={{
                    disableRestoreFocus: true,
                    onClose: () => {
                        setOpen(false);
                    }
                }}
                InputProps={{
                    onFocus: () => {
                        setOpen(true);
                    }
                }}
                open={isOpen}
            />
        </MuiPickersUtilsProvider>
    )
}
