import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { onLogin, onSignup } from './../store/user.actions'
import { useDispatch } from 'react-redux'
import loginImage from '../assets/img/login.jpeg'
import { GoogleLogin } from "react-google-login";
import { Loader } from '../cmps/Loader/Loader'
import { setLoadingOn, setLoadingOff } from '../store/system.actions'

export function LoginSignup(props) {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const validationSchemaRegister = Yup.object().shape({
    fullName: Yup.string()
      .max(50, 'ארוך מדי')
      .required('נדרש למלא שם מלא בשדה זה'),
    password: Yup.string()
      .min(8, 'קצר מדי')
      .required('נדרש למלא סיסמא בשדה זה')
    ,
    mail: Yup.string()
      .email('נדרש להזין אימייל תקין')
      .required('נדרש למלא אימייל')
  });
  const validationSchemaLogin = Yup.object().shape({
    password: Yup.string()
      .required('נדרש למלא סיסמא בשדה זה'),
    mail: Yup.string()
      .required('נדרש למלא אימייל')
  });
  const CLIENT_ID = "773857896333-p8eh47b8n54i8k4m9luphb83o1p1680d.apps.googleusercontent.com"

  const onSubmit = async (values, { resetForm }) => {
    const { fullName, password, mail } = values;
    if (mail.trim() && password.trim()) {
      if (!isLogin) {
        // dispatch(onSignup({ mail, fullname: fullName, password, userType: 'אדמין' }));
        // await dispatch(onSignup({ mail, fullname: fullName, password, userType: 'אדמין' }));
        await dispatch(onSignup({ mail, fullname: fullName, password, userType: 'מטופל' }));
        props.history.push('/');
        resetForm();
        setIsLogin(true);
      } else {
        const user = await dispatch(onLogin({ mail, password }));
        //user successfully logged in
        if (user) {
          if (user.userType === 'אדמין') props.history.push('/');
          if (user.userType === 'מטופל') props.history.push('/');
        } else { //wrong password or mail
          props.history.push('/auth');
        }
      }
    }
  };

  const onSuccess = async (res) => {
    const fullname = `${res.profileObj.name}`;
    const password = res.profileObj.googleId;
    const mail = res.profileObj.email;
    isLogin
      ? await dispatch(onLogin({ mail, password }))
      : await dispatch(onSignup({ mail, fullname, password, userType: 'מטופל' }));
    props.history.push("/");
  };

  const onFail = (response) => {
    console.dir(response);
  };


  return (
    <div
      className='login-signup  flex column align-center'
      style={{ direction: 'rtl' }}
    >
      <div className='login-container flex column'>
        {isLogin ? <p>התחברות </p> : <p>הרשמה</p>}
        <div className="login-logo flex justify-center">
          <img
            src={loginImage}
            id="icon"
            alt="User Icon"
            style={{ borderRadius: '50%' }}
          />
        </div>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            mail: '',
            password: '',
            fullName: '',
          }}
          validationSchema={
            isLogin ? validationSchemaLogin : validationSchemaRegister
          }
          enableReinitialize={true}
        >
          {(props) => (
            <form className='flex column' onSubmit={props.handleSubmit}>
              <div className='flex column'>
                <label htmlFor='mail' className='auth-label'>
                  אימייל
                </label>
                <TextField
                  variant='outlined'
                  placeholder='הכנס אימייל'
                  id='mail'
                  name='mail'
                  onChange={props.handleChange}
                  value={props.values.mail}
                  inputProps={{ className: 'auth-input' }}
                  error={props.touched.mail && Boolean(props.errors.mail)}
                  helperText={
                    (props.touched.mail && props.errors.mail) || ' '
                  }
                  FormHelperTextProps={{ style: { textAlign: 'right' } }}
                />
              </div>

              {!isLogin && (
                <>
                  <div className='flex column'>
                    <label htmlFor='fullName' className='auth-label'>
                      שם מלא
                    </label>
                    <TextField
                      variant='outlined'
                      placeholder='הכנס שם פרטי ומשפחה'
                      id='fullName'
                      name='fullName'
                      onChange={props.handleChange}
                      value={props.values.fullName}
                      inputProps={{ className: 'auth-input' }}
                      error={
                        props.touched.fullName && Boolean(props.errors.fullName)
                      }
                      helperText={
                        (props.touched.fullName && props.errors.fullName) || ' '
                      }
                      FormHelperTextProps={{ style: { textAlign: 'right' } }}
                    />
                  </div>
                </>
              )}

              <div className='flex column'>
                <label htmlFor='password' className='auth-label'>
                  סיסמא
                </label>
                <TextField
                  variant='outlined'
                  placeholder='הכנס סיסמא'
                  id='password'
                  name='password'
                  type={isLogin ? 'password' : 'text'}
                  onChange={props.handleChange}
                  value={props.values.password}
                  inputProps={{ className: 'auth-input' }}
                  error={
                    props.touched.password && Boolean(props.errors.password)
                  }
                  helperText={
                    (props.touched.password && props.errors.password) || ' '
                  }
                  FormHelperTextProps={{ style: { textAlign: 'right' } }}
                />
              </div>
              <button type='submit' className='login-submit'>
                {isLogin ? 'התחברות' : 'הרשמה'}
              </button>
              {isLogin && <button type='button' className='login-submit' onClick={() => { setIsLogin(!isLogin); props.resetForm() }}>
                הרשמה
              </button>}
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText={isLogin ? "התחברות באמצעות גוגל" : "הרשמה באמצעות גוגל"}
                onSuccess={onSuccess}
                onFailure={onFail}
                cookiePolicy={"single_host_origin"}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
