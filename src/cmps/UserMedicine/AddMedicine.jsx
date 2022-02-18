import React, { useState } from 'react';
import Controls from '../controls/Controls'
export function AddMedicine({ medicines, addMedicine, day, isRow }) {
    const [values, setValues] = useState({
        medicineName: '',
        count: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const resetForm = () => {
        setValues({
            medicineName: '',
            count: ''
        });
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addMedicine(values);
        }
    };

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('count' in fieldValues)
            temp.count =
                fieldValues.count.length > 0
                    ? ''
                    : 'נדרש למלא מינון תרופה.'
        if ('medicineName' in fieldValues)
            temp.medicineName =
                fieldValues.medicineName.length > 0
                    ? ''
                    : 'נדרש לבחור תרופה.'
        setErrors({
            ...temp,
        });
        return Object.values(temp).every((x) => x == '');
    };
    return <form className="flex column add-medicine" onSubmit={handleSubmit}>
        <div className="add-medicine-list">
            <Controls.RadioGroup
                name='medicineName'
                value={values.medicineName}
                onChange={handleInputChange}
                items={medicines}
                isRow={isRow}
                error={errors.medicineName}
            />
        </div>

        <Controls.Input
            name='count'
            label='מינון תרופה'
            value={values.count}
            onChange={handleInputChange}
            error={errors.count}
        />
        <Controls.Input
            label='יום תרופה'
            value={day}
            disabled={true}
        />

        <div className='flex justify-center'>
            <Controls.Button
                type='submit'
                text={'הכנס תרופה'}
            />
            <Controls.Button
                text='אפס שדות'
                color='default'
                onClick={resetForm}
            />
        </div>
    </form>


}

export default AddMedicine;
