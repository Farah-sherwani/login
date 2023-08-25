import * as Yup from 'yup'
//all data from yup library
export const loginSchema = Yup.object ({
    name: Yup.string().min(2).max(6).required('Must  be filled'),
    //property string minimum character 2 ad max character 6,not empty
    email: Yup.string().email().required('must be filled'),
    //property type string 
password: Yup.string().min (6).required("enter your password")
});