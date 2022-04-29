import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Popup } from '../../Popup/Popup';
import { PathAddEdit } from './PathAddEdit';
import Button from '../../controls/Button';
import { PathRow } from './PathRow';
import { medicineService } from '../../../services/medicine.service';
import { CmpHeader } from '../../Header/CmpHeader'

export function PathTable() {
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [path, setPath] = useState([
    [
      {
        "levelNumber": 1,
        "description": "שלב ראשון-פיילוט"
      },
      {
        "levelNumber": 1,
        "stepNumber": 4,
        "description": "תחנה מס' 4 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 1,
        "stepNumber": 11,
        "description": "תחנה מס' 11 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 1,
        "stepNumber": 21,
        "description": "תחנה מס' 21 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 1,
        "stepNumber": 28,
        "description": "תחנה מס' 28 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      }
    ],
    [
      {
        "levelNumber": 2,
        "description": "שלב שני-פיילוט"
      },
      {
        "levelNumber": 2,
        "stepNumber": 3,
        "description": "תחנה מס' 3 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 2,
        "stepNumber": 10,
        "description": "תחנה מס' 10 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 2,
        "stepNumber": 17,
        "description": "תחנה מס' 17 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      }
    ],
    [
      {
        "levelNumber": 3,
        "description": "שלב שלישי-פיילוט"
      },
      {
        "levelNumber": 3,
        "stepNumber": 4,
        "description": "תחנה מס' 4 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 3,
        "stepNumber": 15,
        "description": "תחנה מס' 15 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 3,
        "stepNumber": 21,
        "description": "תחנה מס' 21 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      }
    ],
    [
      {
        "levelNumber": 4,
        "description": "שלב רבעי-פיילוט"
      },
      {
        "levelNumber": 4,
        "stepNumber": 12,
        "description": "תחנה מס' 12 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 4,
        "stepNumber": 17,
        "description": "תחנה מס' 17 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 4,
        "stepNumber": 22,
        "description": "תחנה מס' 22 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      },
      {
        "levelNumber": 4,
        "stepNumber": 30,
        "description": "תחנה מס' 30 - פיילוט",
        "date": null,
        "requirements": "מידע אודות התחנה הנוכחית -פיילוט"
      }
    ]
  ]);
  const [isAddLevel, setIsAddLevel] = useState(false)

  const openInPopup = (row) => {
    setRecordForEdit(row);
    setOpenPopup(true);
  };

  useEffect(() => {
    async function queryMedicines() {
      const path = await medicineService.query();
      setPath(path);
    }
    // queryMedicines();
  }, []);

  const addOrEdit = async (record) => {
    if (recordForEdit) {
      const updatedMedicine = await medicineService.updateMedicine(record);
      const newMedicines = path.map((medicine) =>
        medicine.medicineName === record.medicineName
          ? updatedMedicine
          : medicine
      );
      setPath(newMedicines);
    } else {
      const newMedicine = await medicineService.addMedicine(record);
      setPath([...path, newMedicine]);
    }
    setOpenPopup(false);
  };

  const deleteMedicine = async (deleteMedicine) => {
    await medicineService.removeMedicine(deleteMedicine);
    const newMedicines = path.filter(
      (medicine) => medicine.medicineName !== deleteMedicine.medicineName
    );
    setPath(newMedicines);
  };

  const setRecord = (isLevel, record = null) => {
    setOpenPopup(true);
    setRecordForEdit(record);
    setIsAddLevel(isLevel);
  }

  return (
    <>
      <CmpHeader title="ניהול מסלול" />
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table' >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align='right'>מספר תחנה</TableCell>
              <TableCell align='right'>מספר שלב</TableCell>
              <TableCell align='right'>פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {path.map((steps, index) => (
              steps.map((step) => (
                <PathRow
                  key={index + step.levelNumber}
                  row={step}
                  openInPopup={openInPopup}
                  deleteMedicine={deleteMedicine}
                  setRecord={setRecord}
                />))
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup
        title={recordForEdit ? 'עריכת תרופה' : 'הוספת תרופה'}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <PathAddEdit
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          setRecordForEdit={setRecordForEdit}
          isRow={true}
          path={path}
          isAddLevel={isAddLevel}
        />
      </Popup>
      <div style={{ direction: 'rtl', paddingTop: '20px' }}>
        <Button onClick={() => {
          setRecord(true)
        }} text='הוספת שלב' />

        <Button onClick={() => {
          setRecord(false)
        }} text='הוספת תחנה' />
      </div>

    </>
  );
}
