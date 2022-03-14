import React from 'react';
import Controls from '../controls/Controls'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux'
import { utilService } from '../../services/util.service'

export function AddStoryOrTip({ user, editItem, onAddItem, saveEditItem }) {
    const isLoading = useSelector(state => state.systemReducer.isLoading)
    const validationSchemaAddItem = Yup.object().shape({
        title: Yup.string()
            .required('נדרש למלא כותרת'),
        content: Yup.string()
            .required('נדרש למלא תוכן'),
    });

    const handleSubmit = (values) => {
        if (isLoading) return
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

    return <Formik
        onSubmit={handleSubmit}
        initialValues={{
            title: editItem?.title || '',
            content: editItem?.content || '',
        }}
        validationSchema={validationSchemaAddItem}
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
