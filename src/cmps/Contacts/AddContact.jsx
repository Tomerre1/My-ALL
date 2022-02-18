import React, { useState, useEffect } from 'react';
import Controls from '../controls/Controls'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { cloudinaryService } from '../../services/cloudinary-service'

export function AddContact({ user }) {
    const [profileImage, setProfileImage] = useState('');

    const validationSchemaAddContact = Yup.object().shape({
        contactName: Yup.string()
            .required('נדרש למלא שם איש קשר'),
        contactJob: Yup.string()
            .required('נדרש למלא תפקיד איש קשר'),
        contactMail: Yup.string()
            .email('נדרש להזין אימייל תקין')
            .required('נדרש למלא אימייל איש קשר'),
        contactPhone: Yup.string().required(' נדרש להזין את פלאפון איש קשר ')
            .matches(
                /^\d{9,10}$/,
                "נדרש למלא מספר פלאפון תקין"
            ),
    });

    const handleSubmit = (values) => {
        console.log('%c  values:', 'color: white;background: red;', values);
    };

    const uploadFile = async (ev) => {
        ev.preventDefault()
        const res = await cloudinaryService.uploadFile(ev)
        setProfileImage(res.secure_url)
        console.log('%c  res.secure_url:', 'color: white;background: red;', res.secure_url);
    }
    return <Formik
        onSubmit={handleSubmit}
        initialValues={{
            contactName: '',
            contactMail: '',
            contactPhone: '',
            contactJob: ''
        }}
        validationSchema={validationSchemaAddContact}
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
                        name='contactName'
                        label='שם איש קשר'
                        value={props.values.contactName}
                        onChange={props.handleChange}
                        error={props.touched.contactName && props.errors.contactName ? props.errors.contactName : ''}
                    />

                    <Controls.Input
                        name='contactPhone'
                        label='פלאפון איש קשר'
                        value={props.values.contactPhone}
                        onChange={props.handleChange}
                        error={props.touched.contactPhone && props.errors.contactPhone ? props.errors.contactPhone : ''}
                    />

                    <Controls.Input
                        name='contactMail'
                        label='אימייל איש קשר'
                        value={props.values.contactMail}
                        onChange={props.handleChange}
                        error={props.touched.contactMail && props.errors.contactMail ? props.errors.contactMail : ''}
                    />

                    <Controls.Input
                        name='contactJob'
                        label='תפקיד איש קשר'
                        value={props.values.contactJob}
                        onChange={props.handleChange}
                        error={props.touched.contactJob && props.errors.contactJob ? props.errors.contactJob : ''}
                    />

                    <div class="fileUpload blue-btn btn width100">
                        <span>העלאת תמונת איש קשר</span>
                        <input type="file" class="uploadlogo" onChange={uploadFile} />
                    </div>

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

export default AddContact;
