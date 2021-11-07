
import Button from '@mui/material/Button';
import { Formik } from "formik";
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';

export function OrderAddEdit({ onEditOrder, onAddOrder, order }) {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "קצר מדי")
            .max(50, "ארוך מדי")
            .required("נדרש למלא שדה זה"),
        lastName: Yup.string()
            .min(2, "קצר מדי")
            .max(50, "ארוך מדי")
            .required("נדרש למלא שדה זה"),
    });

    const orderSubmit = (values, { resetForm }) => {
        const { firstName, lastName, date } = values;
        (order) ? onEditOrder({ ...order, firstName, lastName, date })
            : onAddOrder({
                firstName, lastName, date, description: 'פרטים', name: 'הזמנה'
            })
        resetForm({})
    }

    return (
        <div className="order-add ">
            <h1>{(order?._id) ? order.name + ' ' + order._id : 'הזמנה חדשה'}</h1>
            <Formik
                onSubmit={orderSubmit}
                initialValues={{
                    firstName: order?.firstName || '',
                    lastName: order?.lastName || '',
                    date: order?.date || Date.now(),
                }}
                validationSchema={validationSchema}
                enableReinitialize={true}
            >
                {props => (
                    <form className="order-form flex column align-center" onSubmit={props.handleSubmit}>
                        <div className="flex column" >
                            <label htmlFor="firstName" className="label" >
                                שם פרטי
                            </label>
                            <TextField
                                variant="outlined"
                                placeholder="הכנס שם פרטי"
                                id="firstName"
                                name="firstName"
                                onChange={props.handleChange}
                                value={props.values.firstName}
                                inputProps={{ className: 'input' }}
                                error={props.touched.firstName && Boolean(props.errors.firstName)}
                                helperText={(props.touched.firstName && props.errors.firstName) || " "}
                                FormHelperTextProps={{ style: { textAlign: 'right' } }}
                            />
                        </div>

                        <div className="flex column">
                            <label htmlFor="lastName" className="label" >
                                שם משפחה
                            </label>
                            <TextField
                                variant="outlined"
                                placeholder="הכנס שם משפחה"
                                id="lastName"
                                name="lastName"
                                onChange={props.handleChange}
                                value={props.values.lastName}
                                error={props.touched.lastName && Boolean(props.errors.lastName)}
                                helperText={(props.touched.lastName && props.errors.lastName) || " "}
                                inputProps={{ className: 'input' }}
                                FormHelperTextProps={{ style: { textAlign: 'right' } }}

                            />
                        </div>

                        <Button
                            variant="contained"
                            className="order-submit"
                            type="submit"
                        >
                            {order?._id ? 'עדכן הזמנה' : 'הוסף הזמנה'}
                        </Button>

                    </form>
                )}
            </Formik>
        </div >
    )
}
