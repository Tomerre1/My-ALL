import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import Chip from '@mui/material/Chip';

export default function Select(props) {
    const { name, label, value, error = null, onChange, options, isMultiple } = props;
    const MenuProps = {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    }
    return (
        <FormControl variant="outlined"
            {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                renderValue={(selected) => {
                    console.log('%c  selected:', 'color: white;background: red;', selected);
                    return (
                        <div>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </div>
                    )
                }}
                multiple={isMultiple ? true : false}
                label={label}
                name={name}
                value={value}
                MenuProps={MenuProps}
                onChange={onChange}>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>

    )
}
