import React, { useState, useEffect } from 'react';
import Controls from '../controls/Controls'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { utilService } from '../../services/util.service'

export function AddStoryOrTip({ isStory, user, editItem, onAddItem, saveEditItem }) {

    const [state, setState] = useState({
        label: editItem?.label || [],
        title: editItem?.title || '',
        content: editItem?.content || '',
    })
    const [options, setOptions] = useState([])

    useEffect(() => {
        if (!isStory) {
            const fetchData = [
                "שלב 1 תחנה 4",
                "שלב 1 תחנה 11",
                "שלב 1 תחנה 21",
                "שלב 1 תחנה 28",
                "שלב 2 תחנה 3",
                "שלב 2 תחנה 10",
                "שלב 2 תחנה 17",
                "שלב 3 תחנה 4",
                "שלב 3 תחנה 15",
                "שלב 3 תחנה 21",
                "שלב 4 תחנה 12",
                "שלב 4 תחנה 17",
                "שלב 4 תחנה 22",
                "שלב 4 תחנה 30"
            ]
            const formattedData = fetchData.map(item => {
                return {
                    id: item, title: item
                }
            })
            setOptions(formattedData)
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

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    // const handleChangeMultiSelect = (event) => {
    //     const { value } = event.target;
    //     if (state?.label?.includes(value)) {
    //         setState({ ...state, label: state.label.filter(item => item !== value) })
    //     } else {
    //         setState({ ...state, label: [...state.label, value] })
    //     }
    // };
    const handleChangeMultiSelect = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: typeof value === 'string' ? value.split(',') : value
        });
    };
    const resetForm = () => {
        setState({
            title: '',
            content: '',
            label: []
        })
    }

    return <Formik
        onSubmit={handleSubmit}
        initialValues={{
            title: state.title,
            content: state.content,
            label: isStory ? ' ' : (state.label)
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
                        onChange={handleChange}
                        error={props.touched.title && props.errors.title ? props.errors.title : ''}
                    />

                    <Controls.Input
                        label='תוכן'
                        rows={5}
                        name='content'
                        value={props.values.content}
                        onChange={handleChange}
                        error={props.touched.content && props.errors.content ? props.errors.content : ''}
                    />

                    {!isStory && <Controls.Select
                        name='label'
                        label='מספר תחנה'
                        isMultiple={true}
                        value={state.label}
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
                            onClick={resetForm}
                        />
                    </div>
                </form>
            )
        }}
    </Formik >
}

export default AddStoryOrTip;
