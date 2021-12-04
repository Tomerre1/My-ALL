import React, { useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Popup } from '../../Popup'
import { MedicineAddEdit } from './MedicineAddEdit'
import Button from "./controls/Button";
import { MedicineRow } from './MedicineRow'

export function MedicineTable() {
    const [openPopup, setOpenPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [medicines, setMedicines] = useState([])

    const openInPopup = row => {
        setRecordForEdit(row)
        setOpenPopup(true)
    }
    const addOrEdit = (record) => {
        if (recordForEdit) {
            const newMedicines = medicines.map(medicine => (medicine.id === recordForEdit.id) ? record : medicine)
            setMedicines(newMedicines)
            setRecordForEdit(null)
        } else {
            setMedicines([...medicines, record])
        }
        setOpenPopup(false)
    }

    const deleteMedicine = (deleteMedicine) => {
        const newMedicines = medicines.filter(medicine => medicine.id !== deleteMedicine.id)
        setMedicines(newMedicines)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>שם תרופה</TableCell>
                            <TableCell align="right">שלב תרופה</TableCell>
                            <TableCell align="right">מינון תרופה</TableCell>
                            <TableCell align="right">צורך בצום</TableCell>
                            <TableCell align="right">פעולות</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {medicines.map((row) => (
                            <MedicineRow key={row.name} row={row} openInPopup={openInPopup} deleteMedicine={deleteMedicine} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Popup
                title={recordForEdit ? "עריכת תרופה" : "הוספת תרופה"}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <MedicineAddEdit recordForEdit={recordForEdit} addOrEdit={addOrEdit} setRecordForEdit={setRecordForEdit} />
            </Popup>
            <div style={{ direction: 'rtl' }}>
                <Button onClick={() => setOpenPopup(true)} text='הוספת תרופה' />
            </div>
        </>
    );
}


















// export function Table() {
//     const [data, setData] = useState([
//         { id: 1, name: 'Mehmet', desc: 'Baran Baran Baran Baran Baran Baran Baran Baran Baran', birthYear: 1987, birthCity: 63 },
//         { id: 2, name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//     ])









//     // const columns = [
//     //     { title: 'שם', field: 'name' },
//     //     { title: 'תיאור', field: 'desc' },
//     //     { title: 'שלב', field: 'level', lookup: { a: 'א', b: 'ב', c: 'ג' } },
//     //     { title: 'מינון', field: 'count', lookup: { 300: '300', 400: '400', 500: '500' } },
//     //     { title: 'תופעות לוואי', field: 'bad', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
//     //     { title: 'צורת לקיחה', field: 'level', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
//     //     { title: 'אילוצים', field: 'level', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
//     // ]

//     // return (
//     //     <>
//     //         <MaterialTable
//     //             style={{ direction: 'unset' }}
//     //             title="הצגת תרופות"
//     //             columns={columns}
//     //             data={data}
//     //             detailPanel={rowData => {
//     //                 return (
//     //                     <p>{rowData.name}</p>
//     //                 )
//     //             }}
//     //             options={{
//     //                 actionsColumnIndex: -1
//     //             }}
//     //             editable={{
//     //                 onRowAdd: newData =>
//     //                     new Promise((resolve, reject) => {
//     //                         setTimeout(() => {
//     //                             setData([...data, newData]);
//     //                             resolve();
//     //                         }, 1000)
//     //                     }),
//     //                 onRowUpdate: (newData, oldData) =>
//     //                     new Promise((resolve, reject) => {
//     //                         setTimeout(() => {
//     //                             const dataUpdate = [...data];
//     //                             const index = oldData.tableData.id;
//     //                             dataUpdate[index] = newData;
//     //                             setData([...dataUpdate]);
//     //                             resolve();
//     //                         }, 1000)
//     //                     }),
//     //                 onRowDelete: oldData =>
//     //                     new Promise((resolve, reject) => {
//     //                         setTimeout(() => {
//     //                             const dataDelete = [...data];
//     //                             const index = oldData.tableData.id;
//     //                             dataDelete.splice(index, 1);
//     //                             setData([...dataDelete]);
//     //                             resolve()
//     //                         }, 1000)
//     //                     }),
//     //             }}
//     //         />
//     //     </>
//     // )
// }
