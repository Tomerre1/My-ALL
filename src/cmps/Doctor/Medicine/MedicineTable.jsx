import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Popup } from '../../Popup';
import { MedicineAddEdit } from './MedicineAddEdit';
import Button from './controls/Button';
import { MedicineRow } from './MedicineRow';

export function MedicineTable() {
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [medicines, setMedicines] = useState([]);

  const openInPopup = (row) => {
    setRecordForEdit(row);
    console.log(
      '%c  recordForEdit:',
      'color: white;background: red;',
      recordForEdit
    );
    setOpenPopup(true);
  };
  const addOrEdit = (record) => {
    console.log('%c  record:', 'color: white;background: red;', record);
    if (record.id) {
      const newMedicines = medicines.map((medicine) =>
        medicine.id === record.id ? record : medicine
      );
      setMedicines(newMedicines);
      setRecordForEdit(null);
    } else {
      setMedicines([...medicines, { ...record, id: record.medicineName }]);
    }
    setOpenPopup(false);
  };

  const deleteMedicine = (deleteMedicine) => {
    const newMedicines = medicines.filter(
      (medicine) => medicine.id !== deleteMedicine.id
    );
    setMedicines(newMedicines);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>שם תרופה</TableCell>
              <TableCell align='right'>שלב תרופה</TableCell>
              <TableCell align='right'>מינון תרופה</TableCell>
              <TableCell align='right'>צורך בצום</TableCell>
              <TableCell align='right'>פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((row) => (
              <MedicineRow
                key={row.name}
                row={row}
                openInPopup={openInPopup}
                deleteMedicine={deleteMedicine}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup
        title={recordForEdit ? 'עריכת תרופה' : 'הוספת תרופה'}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <MedicineAddEdit
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          setRecordForEdit={setRecordForEdit}
        />
      </Popup>
      <div style={{ direction: 'rtl' }}>
        <Button onClick={() => setOpenPopup(true)} text='הוספת תרופה' />
      </div>
    </>
  );
}
