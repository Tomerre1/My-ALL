import React, { useState } from 'react';
import Controls from '../../controls/Controls';

export function PathAddEdit({ addOrEdit, recordForEdit, path, isAddLevel }) {
  const initialFValues = {
    requirements: recordForEdit?.requirements || '',
    description: recordForEdit?.description || '',
    stepNumber: recordForEdit?.stepNumber || '',
    levelNumber: recordForEdit?.levelNumber ? recordForEdit.levelNumber : []
  };
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const isLevel = isAddLevel !== null ?
    isAddLevel :
    recordForEdit?.stepNumber ?
      false : true

  const type = isLevel ? 'שלב' : 'תחנה'

  const levels = path.map(step => {
    return {
      title: `שלב ${step[0].levelNumber[0]}`, id: step[0].levelNumber[0]
    }
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: name === 'levelNumber' ? [+value] : /^-?\d+$/.test(value) && name === 'stepNumber' ? +value : value,

    });
    validate({
      [name]: name === 'levelNumber' ? [+value] : value,
      stepNumber: name === 'stepNumber' ? +value : value
    });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('levelNumber' in fieldValues) {
      const levelsIds = levels.map(lvl => lvl.id)
      temp.levelNumber = fieldValues.levelNumber.length > 0
        ? ''
        : 'נדרש לבחור שלב';
      if (isAddLevel && !recordForEdit) {
        temp.levelNumber += (fieldValues.levelNumber.length > 0 && /^-?\d+$/.test(fieldValues.levelNumber[0]) && fieldValues.levelNumber[0] > 0 && !levelsIds.includes(+(fieldValues.levelNumber[0]))) ?
          '' : 'נדרש למלא מספר שלב תקין ושלא קיים במערכת'
      }
    }

    if ('description' in fieldValues) {
      temp.description = fieldValues.description.length > 0
        ? ''
        : 'נדרש למלא תיאור';
    }

    if (!isLevel && 'stepNumber' in fieldValues) {
      temp.stepNumber = /^-?\d+$/.test(fieldValues.stepNumber) ? '' : 'נדרש למלא מספר תחנה תקין'
      temp.stepNumber += fieldValues?.levelNumber?.length > 0 && values?.stepNumber !== recordForEdit?.stepNumber && path[(fieldValues.levelNumber[0] - 1)]?.some(step => {
        return (step?.stepNumber && step?.stepNumber === fieldValues.stepNumber)
      }) ? ' נדרש לבחור מספר תחנה שאינו קיים בשלב זה' : ''
    }

    if (!isLevel && 'requirements' in fieldValues) {
      temp.requirements =
        fieldValues.requirements.length > 0
          ? ''
          : 'נדרש למלא דרישות.'
    }
    setErrors({
      ...temp,
    });
    console.log('%c  temp:', 'color: white;background: red;', temp);
    return Object.values(temp).every((x) => x == '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit({ ...values, levelNumber: Array.isArray(values.levelNumber) ? values.levelNumber : [+values.levelNumber] });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}
    >
      {!isLevel && <Controls.Select
        name='levelNumber'
        label='בחירת שלב'
        disabled={recordForEdit ? true : false}
        value={values.levelNumber}
        onChange={handleInputChange}
        options={levels}
        error={errors.levelNumber}
      />
      }
      {!recordForEdit && isLevel && <Controls.Input
        name='levelNumber'
        label='מספר שלב'
        value={values.levelNumber}
        onChange={handleInputChange}
        error={errors.levelNumber}
      />}
      {values.levelNumber.length > 0 && !isLevel && < Controls.Input
        name='stepNumber'
        label='מספר תחנה'
        value={values.stepNumber}
        onChange={handleInputChange}
        error={errors.stepNumber}
      />}

      <Controls.Input
        label={`תיאור ${type}`}
        rows={5}
        name='description'
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
      />
      {!isLevel && <Controls.Input
        label={`דרישות ${type}`}
        rows={5}
        name='requirements'
        value={values.requirements}
        onChange={handleInputChange}
        error={errors.requirements}
      />}

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
