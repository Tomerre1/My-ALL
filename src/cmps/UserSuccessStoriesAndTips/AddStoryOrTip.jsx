import React, { useState, useEffect } from 'react';
import Controls from '../controls/Controls'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { utilService } from '../../services/util.service'

export function AddStoryOrTip({ isStory, user, editItem, onAddItem, saveEditItem }) {

    const [selected, setSelected] = useState({
        label: []
    })
    const [options, setOptions] = useState([])
    useEffect(() => {
        if (!isStory) {
            setOptions([{ id: '1', title: 'שלב א' }, { id: '2', title: 'שלב ב' }, { id: '3', title: 'שלב ג' }, { id: '4', title: 'שלב ד' }, { id: '5', title: 'שלב ה' }])
        }
    }, [isStory])

    const validationSchemaAddStory = Yup.object().shape({
        title: Yup.string()
            .required('נדרש למלא כותרת'),
        content: Yup.string()
            .required('נדרש למלא תוכן'),
    });
    const validationSchemaAddTip = Yup.object().shape({
        title: Yup.string()
            .required('נדרש למלא כותרת'),
        content: Yup.string()
            .required('נדרש למלא תוכן'),
        label: Yup.array()
            .min(1, 'נדרש לבחור תחנה')
            .required('נדרש לבחור תחנה')
    });

    const handleSubmit = (values) => {
        if (isStory) {
            delete values.label
        }

        if (editItem) {
            saveEditItem({ ...editItem, ...values })
        } else {
            onAddItem({
                ...values,
                id: utilService.makeId(),
                user,
                date: new Date(),
            })
        }
    };

    const handleChangeMultiSelect = (event) => {
        const { name, value } = event.target;
        console.log('%c   typeof value === string:', 'color: white;background: red;', typeof value === 'string');
        setSelected({
            ...selected,
            [name]: typeof value === 'string' ? value.split(',') : value

        });
    };


    return <Formik
        onSubmit={handleSubmit}
        initialValues={{
            title: editItem?.title || '',
            content: editItem?.content || '',
            label: isStory ? ' ' : (editItem?.label || [])
        }}
        validationSchema={isStory ? validationSchemaAddStory : validationSchemaAddTip}
        enableReinitialize={true}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={true}
    >
        {props => {
            return (
                <form className="flex column add-contact" onSubmit={props.handleSubmit}>
                    <Controls.Input
                        name='title'
                        label='כותרת'
                        value={props.values.title}
                        onChange={props.handleChange}
                        error={props.touched.title && props.errors.title ? props.errors.title : ''}
                    />

                    <Controls.Input
                        label='תוכן'
                        rows={5}
                        name='content'
                        value={props.values.content}
                        onChange={props.handleChange}
                        error={props.touched.content && props.errors.content ? props.errors.content : ''}
                    />

                    {!isStory && <Controls.Select
                        name='label'
                        label='מספר תחנה'
                        value={selected.label}
                        onChange={handleChangeMultiSelect}
                        options={options}
                        error={props.touched.label && props.errors.label ? props.errors.label : ''}
                    />}

                    <div className='flex justify-center'>
                        <Controls.Button
                            type='submit'
                            text={'אישור'}
                        />
                        <Controls.Button
                            text='אפס שדות'
                            color='default'
                            onClick={props.resetForm}
                        />
                    </div>
                </form>
            )
        }}
    </Formik >
}

export default AddStoryOrTip;
