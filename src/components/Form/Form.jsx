import React from 'react';
import { Formik } from 'formik';
import { getColors, setColors, updateColor } from '../../helpers/colors';
import './Form.css'

const ColorForm = (props) => (
  <div>
    <Formik
      initialValues={{ email: '', phone: '', color: '' }}
      validate={(values) => {
        const errors = {};
        const validColors = ['BLACK', 'BLUE', 'RED', 'GREEN'];
        if (!values.email) {
          errors.email = 'This is a required field';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.phone) {
          errors.phone = 'This is a required field';
        } else if (!/^[+][0-9]{1}( [0-9]{3}){2}( [0-9]{2}){2}$/.test(values.phone)) {
          errors.phone = 'Invalid phone number expecting +1 XXX XXX XX XX';
        }
        if (!values.color) {
          errors.color = 'This is a required field';
        } else if (!/^[A-Z]*$/.test(values.color)) {
          errors.color = 'Color must contain only uppercase letters';
        } else if (!validColors.includes(values.color)) {
          errors.color = 'Invalid color';
        }
        return errors;
      }}
      onSubmit={({ color }, { resetForm }) => {
        let favColors = getColors();
        if (!favColors) setColors({ 'BLACK': 0, 'BLUE': 0, 'RED': 0, 'GREEN': 0 });
        updateColor(color);
        resetForm();
        props.setView('report');
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <label for="email" className={errors.email && touched.email ? 'error' : null }>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && <div className="error">{errors.email}</div>}
          <label for="phone" className={errors.phone && touched.phone ? 'error' : null }>Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}
          <label for="favColor" className={errors.color && touched.color ? 'error' : null }>Favourite Color</label>
          <input
            id="favColor"
            name="color"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.color}
          />
          {errors.color && touched.color && <div className="error">{errors.color}</div>}
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default ColorForm;
