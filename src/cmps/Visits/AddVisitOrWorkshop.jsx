import React from 'react';
import Controls from '../controls/Controls'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { utilService } from '../../services/util.service'

export function AddVisitOrWorkshop({ editItem, onAdd, saveEdit, isVisit }) {
    const validationSchemaAddVisit = Yup.object().shape({
        title: Yup.string()
            .required('נדרש למלא את כותרת הביקור'),
        content: Yup.string()
            .required('נדרש למלא את תוכן הביקור'),
    });

    const validationSchemaAddWorkshop = Yup.object().shape({
        title: Yup.string()
            .required('נדרש למלא את כותרת הביקור'),
        content: Yup.string()
            .required('נדרש למלא את תוכן הביקור'),
        lecture: Yup.string()
            .required('נדרש למלא את שם המרצה'),
    });

    const handleSubmit = (values) => {
        if (editItem?.id) {
            saveEdit({ ...editItem, ...values })
        } else {
            onAdd({
                ...values,
                isDone: false,
                id: utilService.makeId()
            })
        }
    };

    return <Formik
        onSubmit={handleSubmit}
        initialValues={{
            title: editItem?.title || '',
            content: editItem?.content || '',
            lecture: editItem?.lecture || '',
            date: editItem?.date || new Date(),
        }}
        validationSchema={isVisit ? validationSchemaAddVisit : validationSchemaAddWorkshop}
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
                        label='כותרת הביקור'
                        value={props.values.title}
                        onChange={props.handleChange}
                        error={props.touched.title && props.errors.title ? props.errors.title : ''}
                    />

                    <Controls.Input
                        name='content'
                        label='תוכן הביקור'
                        rows={5}
                        value={props.values.content}
                        onChange={props.handleChange}
                        error={props.touched.content && props.errors.content ? props.errors.content : ''}
                    />

                    {!isVisit && <Controls.Input
                        name='lecture'
                        label='מרצה הסדנא'
                        value={props.values.lecture}
                        onChange={props.handleChange}
                        error={props.touched.lecture && props.errors.lecture ? props.errors.lecture : ''}
                    />}

                    <Controls.DatePicker
                        name='date'
                        label='תאריך הביקור'
                        value={props.values.date}
                        onChange={props.handleChange}
                        error={props.touched.date && props.errors.date ? props.errors.date : ''}
                    />

                    <div className='flex justify-center'>
                        <Controls.Button
                            type='submit'
                            text={editItem ? 'עדכון' : 'אישור'} />
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

export default AddVisitOrWorkshop;
