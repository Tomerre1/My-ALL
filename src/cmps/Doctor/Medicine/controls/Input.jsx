import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, rows, label, value, error = null, onChange, ...other } = props;
    return (
        <TextField
            multiline
            rows={rows}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}
