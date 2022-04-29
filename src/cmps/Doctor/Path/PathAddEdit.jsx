import React, { useState, useEffect } from 'react';
import Controls from '../../controls/Controls';

export function PathAddEdit({ addOrEdit, recordForEdit, path, isAddLevel }) {
  const initialFValues = {
    requirements: '',
    description: '',
    stepNumber: '',
    levelNumber: []
  };
  const isLevel = isAddLevel !== null ?
    isAddLevel :
    recordForEdit?.stepNumber ?
      false : true
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const levels = path.map(step => {
    return {
      title: `שלב ${step[0].levelNumber}`, id: step[0].levelNumber
    }
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: name === 'levelNumber' ? [value] : /^-?\d+$/.test(value) && name === 'stepNumber' ? +value : value,

    });
    validate({ [name]: name === 'levelNumber' ? [value] : value, num: name === 'stepNumber' ? +value : value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('levelNumber' in fieldValues)
      temp.levelNumber = fieldValues.levelNumber.length > 0
        ? ''
        : 'נדרש לבחור שלב';
    if ('description' in fieldValues)
      temp.description = fieldValues.description.length > 0
        ? ''
        : 'נדרש למלא תיאור';
    if (!isLevel && 'stepNumber' in fieldValues) {
      temp.stepNumber = /^-?\d+$/.test(fieldValues.stepNumber) ? '' : 'נדרש למלא מספר תחנה תקין'
      console.log('%c  fieldValues.stepNumber:', 'color: white;background: red;', fieldValues.stepNumber);

      console.log('%c  values.levelNumber:', 'color: white;background: red;', values.levelNumber);
      console.log('%c  path[fieldValues.levelNumber[0].length - 1]:', 'color: white;background: red;', path[values.levelNumber.length - 1]);
      temp.stepNumber += path[values.levelNumber.length - 1].some(step => {
        return (step?.stepNumber && step?.stepNumber === fieldValues.stepNumber)
      }) ? ' נדרש לבחור מספר תחנה שאינו קיים בשלב זה' : ''
    }
    if (!isLevel && 'requirements' in fieldValues)
      temp.requirements =
        fieldValues.requirements.length > 0
          ? ''
          : 'נדרש למלא דרישות.'
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

  // useEffect(() => {
  //   if (recordForEdit != null)
  //     setValues({
  //       ...recordForEdit,
  //     });
  // }, [recordForEdit]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}
    >

      <Controls.Select
        name='levelNumber'
        label='בחירת שלב'
        value={values.levelNumber}
        onChange={handleInputChange}
        options={levels}
        error={errors.levelNumber}
      />

      {values.levelNumber.length > 0 && < Controls.Input
        name='stepNumber'
        label='מספר תחנה'
        value={values.stepNumber}
        onChange={handleInputChange}
        error={errors.stepNumber}
      />}

      <Controls.Input
        label={isLevel ? 'תיאור תחנה' : 'תיאור שלב'}
        rows={5}
        name='description'
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
      />
      <Controls.Input
        label='דרישות לתחנה'
        rows={5}
        name='description'
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
      />



      {/* <Controls.Select
        name='badInfluence'
        label='תופעות לוואי'
        isMultiple={true}
        value={values.badInfluence}
        onChange={handleChangeMultiSelect}
        options={badInfluenceOptions}
        error={errors.badInfluence}
      /> */}

      {/* <Controls.Input
        name='count'
        label='מינון'
        value={values.count}
        onChange={handleInputChange}
        error={errors.count}
      /> */}

      {/* <Controls.Select
        name='days'
        label='ימי נטילת תרופה'
        value={values.days}
        isMultiple={true}
        onChange={handleChangeMultiSelect}
        options={}
        error={errors.days}
      /> */}

      <div className='flex justify-center'>
        <Controls.Button
          type='submit'
          text={!recordForEdit ? `הכנס ${isLevel ? 'שלב' : 'תחנה'}` : `עדכן ${isLevel ? 'שלב' : 'תחנה'}`}
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
