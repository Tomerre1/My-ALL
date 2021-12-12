import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { userService } from '../services/user.service';
import { useEffect } from 'react';

export function LoginSignup(props) {
  const [isLogin, setIsLogin] = useState(true);
  const userTypes = ['רופא', 'מטופל', 'הורה'];

  const validationSchemaRegister = Yup.object().shape({
    fullName: Yup.string()
      .min(4, 'קצר מדי')
      .max(50, 'ארוך מדי')
      .required('נדרש למלא שם מלא בשדה זה'),
    password: Yup.string()
      .min(8, 'קצר מדי')
      .required('נדרש למלא סיסמא בשדה זה')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'סיסמא צריכה להכיל אותיות גדלות,אותיות קטנות,מספרים ותו מיוחד'
      ),
    userId: Yup.string()
      .min(9, 'קצר מדי')
      .max(9, 'ארוך מדי')
      .required('נדרש למלא תעודת זהות בשדה זה')
      .matches(/^\d+$/, ' תעודת זהות הינה רק עם מספרים'),
    parentId: Yup.string()
      .min(9, 'קצר מדי')
      .max(9, 'ארוך מדי')
      .required('נדרש למלא תעודת זהות בשדה זה')
      .matches(/^\d+$/, ' תעודת זהות הינה רק עם מספרים'),
    userType: Yup.string().required('נדרש לבחור בשדה זה'),
  });

  const validationSchemaLogin = Yup.object().shape({
    password: Yup.string()
      .min(8, 'קצר מדי')
      .required('נדרש למלא סיסמא בשדה זה')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'סיסמא צריכה להכיל אותיות גדלות,אותיות קטנות,מספרים ותו מיוחד'
      ),
    userId: Yup.string()
      .min(9, 'קצר מדי')
      .max(9, 'ארוך מדי')
      .required('נדרש למלא תעודת זהות בשדה זה')
      .matches(/^\d+$/, ' תעודת זהות הינה רק עם מספרים'),
  });

  useEffect(() => {
    console.log('%c  isLogin:', 'color: white;background: red;', isLogin);
  }, [isLogin]);
  const onSubmit = async (values, { resetForm }) => {
    const { fullName, password, userId, userType, parentId } = values;
    console.log(
      '%c  fullName, password, userId, userType, parentId:',
      'color: white;background: red;'
    );
    if (userId.trim() && password.trim()) {
      if (!isLogin) {
        await userService.signup({
          fullname: fullName,
          password,
          userId,
          userType,
          parentId,
        });
        setIsLogin(true);
      } else {
        const user = await userService.login({ userId, password });
        if (user.userType === 'רופא') props.history.push('/doctor');
        else props.history.push('/');
      }
    }
  };
  return (
    <div
      className='login-signup  flex column align-center'
      style={{ direction: 'rtl' }}
    >
      <div className='login-container flex column'>
        {isLogin ? <p>התחברות </p> : <p>הרשמה</p>}
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            userId: '',
            password: '',
            fullName: '',
            parentId: '',
            userType: '',
          }}
          validationSchema={
            isLogin ? validationSchemaLogin : validationSchemaRegister
          }
          enableReinitialize={true}
        >
          {(props) => (
            <form className='flex column' onSubmit={props.handleSubmit}>
              <div className='flex column'>
                <label htmlFor='userId' className='auth-label'>
                  תעודת זהות
                </label>
                <TextField
                  variant='outlined'
                  placeholder='הכנס תעודת זהות'
                  id='userId'
                  name='userId'
                  onChange={props.handleChange}
                  value={props.values.userId}
                  inputProps={{ className: 'auth-input' }}
                  error={props.touched.userId && Boolean(props.errors.userId)}
                  helperText={
                    (props.touched.userId && props.errors.userId) || ' '
                  }
                  FormHelperTextProps={{ style: { textAlign: 'right' } }}
                />
              </div>

              {!isLogin && (
                <>
                  <div className='flex column'>
                    <label htmlFor='parentId' className='auth-label'>
                      תעודת זהות הורה
                    </label>
                    <TextField
                      variant='outlined'
                      placeholder='הכנס תעודת זהות של הורה'
                      id='parentId'
                      name='parentId'
                      onChange={props.handleChange}
                      value={props.values.parentId}
                      inputProps={{ className: 'auth-input' }}
                      error={
                        props.touched.parentId && Boolean(props.errors.parentId)
                      }
                      helperText={
                        (props.touched.parentId && props.errors.parentId) || ' '
                      }
                      FormHelperTextProps={{ style: { textAlign: 'right' } }}
                    />
                  </div>

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

                  <div className='flex column'>
                    <label htmlFor='userType' className='auth-label'>
                      בחירת סוג משתמש
                    </label>
                    <TextField
                      variant='outlined'
                      select
                      id='userType'
                      name='userType'
                      onChange={props.handleChange}
                      value={props.values.userType}
                      inputProps={{ className: 'auth-input' }}
                      error={
                        props.touched.userType && Boolean(props.errors.userType)
                      }
                      helperText={
                        (props.touched.userType && props.errors.userType) || ' '
                      }
                      FormHelperTextProps={{ style: { textAlign: 'right' } }}
                    >
                      {userTypes.map((userType) => (
                        <MenuItem key={userType} value={userType}>
                          {userType}
                        </MenuItem>
                      ))}
                    </TextField>
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
                {isLogin ? 'התחבר' : 'הרשם'}
              </button>
            </form>
          )}
        </Formik>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'הרשמה...' : 'התחברות'}
        </p>
      </div>
    </div>
  );
}
// const mapDispatchToProps = {
//   onLogin,
//   onSignup,
// };
// export const LoginSignup = connect(null, null)(_LoginSignup);
// export const LoginSignup = connect(null, mapDispatchToProps)(_LoginSignup);
