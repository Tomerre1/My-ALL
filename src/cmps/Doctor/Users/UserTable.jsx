import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Popup } from '../../Popup/Popup';
import { UserAddEdit } from './UserAddEdit';
import Button from '../../controls/Button';
import { UserRow } from './UserRow';
import { CmpHeader } from '../../Header/CmpHeader';
import { userService } from '../../../services/user.service';
import { utilService } from '../../../services/util.service';


export function UserTable() {
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [users, setUsers] = useState([{ id: utilService.makeId(), mail: "revahtomer@gmail.com", fullname: "Tomer Revah", userType: ["מטופל"] }]);

  const openInPopup = (row) => {
    setRecordForEdit(row);
    setOpenPopup(true);
  };

  useEffect(() => {
    async function queryUsers() {
      const users = await userService.queryUsers();
      const formattedUsers = users.map(user => {
        return { ...user, userType: [user.userType], id: user?.id || utilService.makeId() }
      })
      setUsers(formattedUsers);
    }
    queryUsers();
  }, []);

  const addOrEdit = async (record) => {
    if (recordForEdit) {
      const newUsers = users.map((user) =>
        user.id === record.id
          ? record
          : user
      );
      setUsers(newUsers);
      await userService.updateUser(record);
    } else {
      setUsers([...users, { ...record, id: utilService.makeId() }]);
      await userService.signup(record);
    }
    setOpenPopup(false);
  };

  const deleteUser = async (deleteUser) => {
    const newUsers = users.filter(user => user.mail !== deleteUser.mail);
    setUsers(newUsers);
    await userService.removeUser(deleteUser);
  };

  return (
    <>
      <CmpHeader title="ניהול משתמשים" />

      <TableContainer component={Paper}>
        <Table aria-label='collapsible table' >
          <TableHead>
            <TableRow>
              <TableCell align='right'>שם מלא</TableCell>
              <TableCell align='right'>אימייל</TableCell>
              <TableCell align='right'>סוג משתמש</TableCell>
              <TableCell align='right'>פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UserRow
                key={user.mail}
                row={user}
                openInPopup={openInPopup}
                deleteUser={deleteUser}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup
        title={recordForEdit ? 'עריכת משתמש' : 'הוספת משתמש'}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <UserAddEdit
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          setRecordForEdit={setRecordForEdit}
          isRow={true}
        />
      </Popup>
      <div style={{ direction: 'rtl', paddingTop: '20px' }}>
        <Button onClick={() => {
          setOpenPopup(true); setRecordForEdit(null);
        }} text='הוספת משתמש' />
      </div>

    </>
  );
}
