import React, { useState, useEffect } from 'react'
import Controls from "./controls/Controls"

export function MedicineAddEdit({ addOrEdit, recordForEdit, setRecordForEdit }) {
    const initialFValues = {
        id: 0,
        medicineName: '',
        description: '',
        bad_influence: '',
        food_or_not: 'No',
        level: '',
        count: ''
    }
    const genderItems = [
        { id: 'No', title: 'ללא צום' },
        { id: 'Yes', title: 'צום' },
    ]

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('medicineName' in fieldValues)
            temp.medicineName = fieldValues.medicineName ? "" : "נדרש למלא שם תרופה"
        if ('description' in fieldValues)
            temp.description = fieldValues.description ? "" : "נדרש למלא תיאור תרופה"
        if ('bad_influence' in fieldValues)
            temp.description = fieldValues.bad_influence ? "" : "נדרש למלא תופעות לוואי"
        // if ('email' in fieldValues)
        //     temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        // if ('mobile' in fieldValues)
        //     temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('level' in fieldValues)
            temp.level = fieldValues.level.length != 0 ? "" : "This field is required."
        if ('count' in fieldValues)
            temp.level = fieldValues.count.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) addOrEdit(values, resetForm);
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
        return setRecordForEdit(null)
    }, [recordForEdit])

    return (
        <form onSubmit={handleSubmit} style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
            <Controls.Input
                name="medicineName"
                label="שם תרופה"
                value={values.medicineName}
                onChange={handleInputChange}
                error={errors.medicineName}
            />
            <Controls.Input
                label="תיאור תרופה"
                rows={5}
                name="description"
                value={values.description}
                onChange={handleInputChange}
                error={errors.description}
            />
            <Controls.Select
                name="level"
                label="שלב תרופה"
                value={values.level}
                onChange={handleInputChange}
                options={[{ id: 'a', title: 'א' }, { id: 'b', title: 'ב' }, { id: 'c', title: 'ג' }, { id: 'd', title: 'ד' }]}
                error={errors.level}
            />
            <Controls.Select
                name="count"
                label="מינון תרופה"
                value={values.count}
                onChange={handleInputChange}
                options={[{ id: 100, title: 100 }, { id: 200, title: 200 }, { id: 300, title: 300 }, { id: 400, title: 400 }]}
                error={errors.count}
            />
            <Controls.Input
                name="bad_influence"
                label="תופעות לוואי"
                rows={5}
                value={values.bad_influence}
                onChange={handleInputChange}
                error={errors.bad_influence}
            />

            <Controls.RadioGroup
                name="food_or_not"
                value={values.food_or_not}
                onChange={handleInputChange}
                items={genderItems}
            />

            <div>
                <Controls.Button
                    type="submit"
                    text="Submit" />
                <Controls.Button
                    text="Reset"
                    color="default"
                    onClick={resetForm} />
            </div>
        </form>
    )
}
