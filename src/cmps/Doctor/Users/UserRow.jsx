import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const UserRow = ({ row, openInPopup, deleteUser }) => {
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align='right' component='th' scope='row'>
          {row.fullname}
        </TableCell>
        <TableCell align='right'>{row.mail}</TableCell>
        <TableCell align='right'>{row.userType}</TableCell>
        <TableCell align='right'>
          <EditIcon onClick={() => openInPopup(row)} />
          <DeleteIcon onClick={() => deleteUser(row)} />
        </TableCell>
      </TableRow>
      <TableRow>
      </TableRow>
    </>
  );
};
