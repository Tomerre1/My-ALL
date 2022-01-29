import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import FormHelperText from '@mui/material/FormHelperText';


export default function RadioGroup({ name, label, value, onChange, items, isRow, error }) {
  console.log('%c  error:', 'color: white;background: red;', error);
  return (
    <FormControl error={error}>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup
        row
        style={{ justifyContent: 'center', flexDirection: isRow ? 'row' : 'column', display: 'flex' }}
        name={name}
        value={value}
        onChange={onChange}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item?.id || item.medicineName}
            value={item?.id || item.medicineName}
            control={<Radio />}
            label={item?.title || item.medicineName}
          />
        ))}
      </MuiRadioGroup>
      <FormHelperText style={{ color: '#f44336' }}>{error}</FormHelperText>
    </FormControl>
  );
}
