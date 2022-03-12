import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    labelRoot: {
        right: 0
    },
    shrink: {
        transformOrigin: "top right"
    }
}));

export default function Input(props) {
    const classes = useStyles();
    const { name, rows, label, value, error = null, onChange, ...other } = props;
    return (
        <TextField
            multiline
            rows={rows}
            // inputProps={{ min: 0, style: { textAlign: 'right' } }}
            // InputLabelProps={{
            //     classes: { root: classes.labelRoot, shrink: classes.shrink }
            // }}
            style={{ direction: "rtl" }}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}
