import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [err, setErr] = useState(null);


    const handleClick = async (e) => {
        //setErr("")
        e.preventDefualt();
        try {
            await axios.post("http://localhost:3600/api/auth/register", { name, username, password, email });
            navigate("/login")
        } catch (err) {
            setErr(err.response.data?.message);
        }
    }
    const MyTextInput = ({ label, ...props }) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input>. We can use field meta to show an error
        // message if the field is invalid and it has been touched (i.e. visited)
        const [field, meta] = useField(props);
        return (
          <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input classNameName="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
              <div classNameName="error">{meta.error}</div>
            ) : null}
          </>
        );
      };
      
      const MyCheckbox = ({ children, ...props }) => {
        // React treats radios and checkbox inputs differently other input types, select, and textarea.
        // Formik does this too! When you specify `type` to useField(), it will
        // return the correct bag of props for you -- a `checked` prop will be included
        // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
        const [field, meta] = useField({ ...props, type: 'checkbox' });
        return (
          <div>
            <label classNameName="checkbox-input">
              <input type="checkbox" {...field} {...props} />
              {children}
            </label>
            {meta.touched && meta.error ? (
              <div classNameName="error">{meta.error}</div>
            ) : null}
          </div>
        );
      };
      
      const MySelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
              <div classNameName="error">{meta.error}</div>
            ) : null}
          </div>
        );
      };
    const SignupForm = () => {
        return(
        <>
        <Formik
        initialValues={{username: '', password: '', email: '' } }
        validationSchema={Yup.object({
              username: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
              password: Yup.string()
              .max(20, 'Must be 15 characters or less')
              .required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
              .oneOf(
                ['designer', 'development', 'product', 'other'],
                'Invalid Job Type'
              )
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
        <Form>
           <MyTextInput
             label="username"
             name="username"
             type="text"
             placeholder="username"
           />
 
           <MyTextInput
             label="password"
             name="password"
             type="password"
             placeholder="password"
           />
 
           <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="jane@formik.com"
           />
 
           <MySelect label="role" name="role">
             <option value="">Select a job type</option>
             <option value="user">user</option>
             <option value="admin">admin</option>
           </MySelect>
 
           <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
           </MyCheckbox>
 
           <button type="submit">Submit</button>
         </Form>
        </Formik>
        </>
       );
    };

    
}
export default Register