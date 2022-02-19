import React, { useState, useEffect } from 'react';
import Controls from '../controls/Controls'
import { Formik } from 'formik';
import * as Yup from 'yup';

export function AddVideo({ addVideo, onRemoveVideo, onEditVideo }) {

    const validationSchemaAddVideo = Yup.object().shape({
        videoName: Yup.string()
            .required('נדרש למלא כותרת לסרטון'),
        videoDescription: Yup.string()
            .required('נדרש למלא תיאור סרטון'),
        videoUrl: Yup.string()
            .matches(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/, 'נדרש למלא כתובות מיו טיוב בלבד')
            .required('נדרש למלא כתובת לסרטון'),
    });

    const handleSubmit = (values) => {
        addVideo({
            videoUrl: values.videoUrl,
            videoDescription: values.videoDescription,
            videoName: values.videoName
        })
        console.log('%c  values:', 'color: white;background: red;', values);
    };

    return <Formik
        onSubmit={handleSubmit}
        initialValues={{
            videoName: '',
            videoDescription: '',
            videoUrl: '',
        }}
        validationSchema={validationSchemaAddVideo}
        enableReinitialize={true}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={true}
    >
        {props => {
            console.log(props.errors, props.touched);
            return (
                <form className="flex column add-contact" onSubmit={props.handleSubmit}>
                    <Controls.Input
                        name='videoName'
                        label='כותרת הסרטון'
                        value={props.values.videoName}
                        onChange={props.handleChange}
                        error={props.touched.videoName && props.errors.videoName ? props.errors.videoName : ''}
                    />

                    <Controls.Input
                        name='videoDescription'
                        label='תיאור הסרטון'
                        rows={4}
                        value={props.values.videoDescription}
                        onChange={props.handleChange}
                        error={props.touched.videoDescription && props.errors.videoDescription ? props.errors.videoDescription : ''}
                    />

                    <Controls.Input
                        name='videoUrl'
                        label='לינק לסרטון'
                        value={props.values.videoUrl}
                        onChange={props.handleChange}
                        error={props.touched.videoUrl && props.errors.videoUrl ? props.errors.videoUrl : ''}
                    />

                    <div className='flex justify-center'>
                        <Controls.Button
                            type='submit'
                            text={'הכנס סירטון'}
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

export default AddVideo;
