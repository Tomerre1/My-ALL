import React, { useState } from 'react';
import Controls from '../controls/Controls'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { cloudinaryService } from '../../services/cloudinary-service'
import { utilService } from '../../services/util.service'
import { RotatingLines } from 'react-loader-spinner';
import { setLoadingOn, setLoadingOff } from '../../store/system.actions';

export function AddVisitOrWorkshop({ editItem, onAdd, saveEdit }) {
    const dispatch = useDispatch()
    // const isLoading = useSelector(state => state.systemReducer.isLoading)
    const validationSchemaAddVisit = Yup.object().shape({
        title: Yup.string()
            .required('נדרש למלא שם איש קשר'),
        content: Yup.string()
            .required('נדרש למלא תפקיד איש קשר'),
    });

    const handleSubmit = (values) => {
        if (editItem.id) {
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
            date: editItem?.date || new Date(),
        }}
        validationSchema={validationSchemaAddVisit}
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
                        label='כותרת לביקור'
                        value={props.values.title}
                        onChange={props.handleChange}
                        error={props.touched.title && props.errors.title ? props.errors.title : ''}
                    />

                    <Controls.Input
                        name='content'
                        label='תוכן הביקור'
                        value={props.values.phone}
                        onChange={props.handleChange}
                        error={props.touched.phone && props.errors.phone ? props.errors.phone : ''}
                    />

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
                            text={'הכנס איש קשר'}
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

export default AddVisitOrWorkshop;
