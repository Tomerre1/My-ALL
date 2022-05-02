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
import { CmpHeader } from '../../Header/CmpHeader'
import { timelineService } from '../../../services/timeline.service'
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
      const formattedPath = path.map(step => step.map((step, idx) => { return { ...step, levelNumber: [step.levelNumber], isLevel: idx === 0 ? true : false } }));
      setPath(formattedPath);
    }
    queryMedicines();
  }, []);

  const addOrEdit = async (pathObj) => {
    const isPathLevel = pathObj?.stepNumber ? false : true
    if (recordForEdit) {
      if (isPathLevel) {
        const idx = path.findIndex((group) => {
          return group[0].levelNumber[0] === pathObj.levelNumber[0]
        });
        const updatedLevel = path[idx].map((step, index) => (step.levelNumber[0] === pathObj.levelNumber[0] && index === 0) ? { ...pathObj } : step)
        const updatedPath = [...path.slice(0, idx), updatedLevel, ...path.slice(idx + 1)]
        setPath(updatedPath)
      } else {
        const idx = path.findIndex((group) => {
          return group[0].levelNumber[0] === pathObj.levelNumber[0]
        });

        const updatedLevel = path[idx].map((step) => {
          return (step.levelNumber[0] === pathObj.levelNumber[0] && step.stepNumber === recordForEdit.stepNumber) ? { ...pathObj } : step
        }).sort((a, b) => a.stepNumber - b.stepNumber);
        const updatedPath = [...path.slice(0, idx), updatedLevel, ...path.slice(idx + 1)]
        setPath(updatedPath);
      }
      // setPath([...path]);
    }
    else {
      if (isPathLevel) {
        const updatedPath = [...path, [{ ...pathObj }]]
        const sortByLevel = updatedPath.sort((a, b) => {
          return a[0].levelNumber[0] - b[0].levelNumber[0]
        })
        setPath(sortByLevel);
      }
      else {
        const idx = path.findIndex((group) => {
          return +(group[0].levelNumber[0]) === +(pathObj.levelNumber[0])
        });
        const addWithOutSort = [...path[idx], pathObj];
        const sortByStepNumber = addWithOutSort.sort((a, b) => a.stepNumber - b.stepNumber);
        path[idx] = sortByStepNumber;
        setPath([...path]);
      }
    }
    setOpenPopup(false);
  };

  const deletePathObj = async (pathObj) => {
    const isPathLevel = pathObj?.stepNumber ? false : true
    if (isPathLevel) {
      const idx = path.findIndex((group, idx) => group[0].levelNumber === pathObj.levelNumber);
      const updatedPath = path.filter((el, index) => index !== idx)
      setPath(updatedPath);
      await timelineService.removeLevel(pathObj)
    } else {
      const updatedPath = path.map((group) =>
        group.filter(step => step.stepNumber !== pathObj.stepNumber)
      )
      setPath(updatedPath);
      await timelineService.removeStep(pathObj)
    }
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
                  key={step.description}
                  row={step}
                  openInPopup={openInPopup}
                  deletePathObj={deletePathObj}
                  setRecord={setRecord}
                />))
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup
        title={`${recordForEdit ? 'עריכת' : 'הוספת'} ${isAddLevel ? 'שלב' : 'תחנה'}`}
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
