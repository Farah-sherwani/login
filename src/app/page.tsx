
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useFormik } from 'formik'
//Get data from form
import * as Yup from 'yup'
//for form validation
import {loginSchema} from './Schemas';
//get data from schema folder

     
const initialValues ={
  //initial values FUNCTION NAME and data 
  name:"",
  //attribute
  email : "" ,
  password: "",
}

const log = () =>{
const {values, errors, touched, handleBlur, handleChange,handleSubmit} = useFormik({
  //destructure the values 
  initialValues: initialValues,
  //first get initial value
  validationSchema:  loginSchema,
  //validation schema is property, pass the loginschema from schema folder
  onSubmit: (values) => {
    //callback fnction get data on submit
    // console.log(values);
    // actions.resetForm();
    //reset the form
  },
    
});
console.log(values)


  return(
    <>
    <form onSubmit={handleSubmit}>
      <div className='container'><h1>Login</h1></div>
      Name: <input type='text' 
      name='name' 
      placeholder='name'
       value={values.name}
       onChange={handleChange} 
       onBlur={handleBlur}>
        
        </input>
        { errors.name && touched.name ?( <p className='form-error'>{errors.name}</p>) : null}
        {/* if true the field then show error otherwise not */}
        <br/>
      Email: <input type='text' 
      name='email' 
      placeholder='xyz@abccom' 
      value={values.email}
       onChange={handleChange}
        onBlur={handleBlur}>
          </input>
          <p className='form-error'>{errors.name}</p>
          {/* to display the message of requird field of schema */}
          <br/>
      Password: <input type='text' 
      name='password'
       placeholder='123' 
       value={values.password}
       onChange={handleChange} 
       onBlur={handleBlur}>
        
        </input><br/>  
      
      <button type ='submit' >Submit</button>
    </form>
    </>
  )
}
export default log
