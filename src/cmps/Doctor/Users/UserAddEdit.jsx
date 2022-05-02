import React, { useState, useEffect } from 'react';
import Controls from '../../controls/Controls';

export function UserAddEdit({ addOrEdit, recordForEdit, isRow }) {
  const initialFValues = {
    fullname: '',
    mail: '',
    userType: [],
    password: ''
  };
  const options = [{ id: 'אדמין', title: 'אדמין' }, { id: 'מטופל', title: 'מטופל' }];

  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  const handleChangeMultiSelect = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: [value],
    });
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullname' in fieldValues)
      temp.fullname = fieldValues.fullname.length > 0
        ? ''
        : 'נדרש למלא שם מלא';
    if ('mail' in fieldValues)
      temp.mail = fieldValues.mail.length > 0
        ? ''
        : 'נדרש למלא כתובת אימייל';
    if ('userType' in fieldValues)
      temp.userType =
        fieldValues.userType.length > 0
          ? ''
          : 'נדרש לבחור סוג משתמש.'

    if ('password' in fieldValues)
      temp.password =
        fieldValues.password.length > 7
          ? ''
          : 'נדרש סיסמא 8 ספרות לפחות.'

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values);

    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}
    >
      <Controls.Input
        name='fullname'
        label='שם מלא'
        value={values.fullname}
        onChange={handleInputChange}
        error={errors.fullname}
      />

      <Controls.Select
        name='userType'
        label='סוג משתמש'
        value={values.userType}
        onChange={handleChangeMultiSelect}
        options={options}
        error={errors.userType}
      />

      <Controls.Input
        name='mail'
        label='אימייל'
        value={values.mail}
        onChange={handleInputChange}
        error={errors.mail}
        disabled={recordForEdit ? true : false}
      />

      <Controls.Input
        name='password'
        label='סיסמא'
        value={values.password}
        onChange={handleInputChange}
        error={errors.password}
      />

      <div className='flex justify-center'>
        <Controls.Button
          type='submit'
          text={!recordForEdit ? 'הכנס משתמש' : 'עדכן משתמש'}
        />
        {!recordForEdit && (
          <Controls.Button
            text='אפס שדות'
            color='default'
            onClick={resetForm}
          />
        )}
      </div>
    </form>
  );
}
