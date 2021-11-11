import React, { useState } from "react";
import { connect } from "react-redux";
// import { onLogin, onSignup } from "../store/user.actions";
import { Formik } from "formik";
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';


export function LoginSignup(props) {
  const [isLogin, setIsLogin] = useState(true);

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(4, "קצר מדי")
      .max(50, "ארוך מדי")
      .required("נדרש למלא שם מלא בשדה זה"),
    password: Yup.string()
      .min(8, "קצר מדי")
      .required("נדרש למלא סיסמא בשדה זה")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'סיסמא צריכה להכיל אותיות גדלות,אותיות קטנות,מספרים ותו מיוחד'
      ),
    username: Yup.string()
      .min(4, "קצר מדי")
      .max(50, "ארוך מדי")
      .required("נדרש למלא שם משתמש בשדה זה"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const { fullname, password, username } = values;
    if (username.trim() && password.trim()) {
      if (!isLogin) {
        fetch('http://127.0.0.1:8000/login/', {
          'method': 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 5cbce175d45037d379e125dd7a65104063e8b7a5'
          },
          body: JSON.stringify({ first_name: fullname, last_name: fullname })

        }).then(resp => resp.json())
        // props.onSignup({ username, password, fullname, imgUrl: "" });
        console.log('%c  fullname signup:', 'color: #00000;background: #aaefe5;', fullname);
        console.log('%c  password signup:', 'color: #00000;background: #aaefe5;', password);
        console.log('%c  username signup:', 'color: #00000;background: #aaefe5;', username);
        // props.history.push("/workspace");
      } else {
        // props.onLogin({ username, password });
        console.log('%c  password login:', 'color: #00000;background: #aaefe5;', password);
        console.log('%c  username login:', 'color: #00000;background: #aaefe5;', username);
        // props.history.push("/workspace");
      }
    }
  };
  return (
    <div className="login-signup  flex column align-center">
      <div className="login-container flex column">
        {isLogin ? <p>התחברות </p> : <p>הרשמה</p>}
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            username: '',
            password: '',
            fullname: '',
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {props => (
            <form className="flex column" onSubmit={props.handleSubmit}>
              <div className="flex column" >
                <label htmlFor="username" className="auth-label" >
                  שם משתמש
                </label>
                <TextField
                  variant="outlined"
                  placeholder="הכנס שם משתמש"
                  id="username"
                  name="username"
                  onChange={props.handleChange}
                  value={props.values.username}
                  inputProps={{ className: 'auth-input' }}
                  error={props.touched.username && Boolean(props.errors.username)}
                  helperText={(props.touched.username && props.errors.username) || " "}
                  FormHelperTextProps={{ style: { textAlign: 'right' } }}
                />
              </div>
              {!isLogin && (
                <div className="flex column" >
                  <label htmlFor="fullname" className="auth-label" >
                    שם מלא
                  </label>
                  <TextField
                    variant="outlined"
                    placeholder="הכנס שם פרטי ומשפחה"
                    id="fullname"
                    name="fullname"
                    onChange={props.handleChange}
                    value={props.values.fullname}
                    inputProps={{ className: 'auth-input' }}
                    error={props.touched.fullname && Boolean(props.errors.fullname)}
                    helperText={(props.touched.fullname && props.errors.fullname) || " "}
                    FormHelperTextProps={{ style: { textAlign: 'right' } }}
                  />
                </div>
              )}

              <div className="flex column" >
                <label htmlFor="password" className="auth-label" >
                  סיסמא
                </label>
                <TextField
                  variant="outlined"
                  placeholder="הכנס שם פרטי ומשפחה"
                  id="password"
                  name="password"
                  onChange={props.handleChange}
                  value={props.values.password}
                  inputProps={{ className: 'auth-input' }}
                  error={props.touched.password && Boolean(props.errors.password)}
                  helperText={(props.touched.password && props.errors.password) || " "}
                  FormHelperTextProps={{ style: { textAlign: 'right' } }}
                />
              </div>
              <button className="login-submit">
                {isLogin ? "התחבר" : "הרשם"}
              </button>
            </form>
          )}
        </Formik>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "הרשמה..." : "התחברות"}
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
