import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export const PathRow = ({ row, openInPopup, deleteMedicine, setRecord }) => {
  const [open, setOpen] = useState(false);
  return (

    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align='right' component='th' scope='row' style={{ color: row?.stepNumber ? 'blue' : 'black' }}>
          {row?.stepNumber || ''}
        </TableCell>
        <TableCell align='right' style={{ color: row?.stepNumber ? 'black' : 'blue' }}>{row?.levelNumber || ''}</TableCell>
        <TableCell align='right'>
          <EditIcon onClick={() => openInPopup(row)} />
          <DeleteIcon onClick={() => deleteMedicine(row)} />
          {/* {!(row?.stepNumber) && <AddCircleIcon onClick={() => setRecord(row)} />} */}
        </TableCell>
      </TableRow>
      <TableRow align='right' >
        <TableCell align='right' colSpan={12} style={{ paddingBottom: 0, paddingTop: 0 }}  >
          <Collapse in={open} timeout='auto' unmountOnExit align='right' >
            <Box
              sx={{
                margin: 1,
                textAlign: 'right',
              }}
            >
              <Typography variant='h6' gutterBottom component='div' style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                תיאור
              </Typography>
              <p>{row.description}</p>
              {row.requirements &&
                <>
                  <Typography variant='h6' gutterBottom component='div' style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                    דרישות
                  </Typography>
                  <p>{row.requirements}</p>
                </>}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
