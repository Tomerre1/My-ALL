import React, { useState, useEffect } from 'react';
import Controls from './controls/Controls';

export function MedicineAddEdit({ addOrEdit, recordForEdit, setRecordForEdit, }) {



  const handleChangeMultiSelect = (event) => {
    const { name, value } = event.target;
    console.log('%c  name:', 'color: white;background: red;', name);
    console.log('%c  value:', 'color: white;background: red;', value);
    setValues({
      ...values,
      [name]: typeof value === 'string' ? value.split(',') : value
    });
  };

  const initialFValues = {
    medicineName: '',
    description: '',
    badInfluence: '',
    foodOrNot: 'ללא צום',
    level: '',
    count: '',
    selectedDays: [],
    selectedBadInfluences: [],
  };
  const genderItems = [
    { id: 'ללא צום', title: 'ללא צום' },
    { id: 'צום', title: 'צום' },
  ];
  const daysOptions = [1, 2, 3, 4, 5, 6, 7]

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

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('medicineName' in fieldValues)
      temp.medicineName = fieldValues.medicineName ? '' : 'נדרש למלא שם תרופה';
    if ('description' in fieldValues)
      temp.description = fieldValues.description ? '' : 'נדרש למלא תיאור תרופה';
    if ('badInfluence' in fieldValues)
      temp.description = fieldValues.badInfluence
        ? ''
        : 'נדרש למלא תופעות לוואי';
    // if ('email' in fieldValues)
    //     temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    // if ('mobile' in fieldValues)
    //     temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ('level' in fieldValues)
      temp.level =
        fieldValues.level.length != 0 ? '' : 'This field is required.';
    if ('count' in fieldValues)
      temp.level =
        fieldValues.count.length != 0 ? '' : 'This field is required.';
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
        name='medicineName'
        label='שם תרופה'
        value={values.medicineName}
        onChange={handleInputChange}
        disabled={recordForEdit ? true : false}
        error={errors.medicineName}
      />
      <Controls.Input
        label='תיאור תרופה'
        rows={5}
        name='description'
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
      />
      <Controls.Select
        name='selectedDays'
        label='שלב תרופה'
        value={values.selectedDays}
        onChange={handleChangeMultiSelect}
        options={[
          { id: 1, title: 'שלב 1' },
          { id: 2, title: 'שלב 2' },
          { id: 3, title: 'שלב 3' },
          { id: 4, title: 'שלב 4' },
        ]}
        error={errors.level}
      />
      {/* <Controls.Select
        name='count'
        label='מינון תרופה'
        value={values.count}
        onChange={handleInputChange}
        options={[
          { id: 100, title: 100 },
          { id: 200, title: 200 },
          { id: 300, title: 300 },
          { id: 400, title: 400 },
        ]}
        error={errors.count}
      /> */}
      <Controls.Input
        name='badInfluence'
        label='תופעות לוואי'
        rows={5}
        value={values.badInfluence}
        onChange={handleInputChange}
        error={errors.badInfluence}
      />

      <Controls.RadioGroup
        name='foodOrNot'
        value={values.foodOrNot}
        onChange={handleInputChange}
        items={genderItems}
      />

      <div className='flex justify-center'>
        <Controls.Button
          type='submit'
          text={!recordForEdit ? 'הכנס תרופה' : 'עדכן תרופה'}
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
