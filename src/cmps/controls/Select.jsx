import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import Chip from '@mui/material/Chip';

export default function Select(props) {
    const { name, label, value, error = null, onChange, options, isMultiple, disabled } = props;
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
                    const antiCrash = Array.isArray(selected) ? selected : [selected]
                    return (
                        <div>
                            {antiCrash.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </div>
                    )
                }}
                multiple={isMultiple ? true : false}
                label={label}
                name={name}
                value={value}
                disabled={disabled ? true : false}
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
