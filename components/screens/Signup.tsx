import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';


const signupSchema = Yup.object().shape({
    firstName: Yup.string().required("Please add your first name here"),
    lastName:Yup.string().required("Please add your last name"),
    email:Yup.string().email("Not a valid email address").required("Please add your email to get started!")
})

export const Signup:FunctionComponent = () => {
    return (
        <>
        <Formik
     initialValues={{ 
        firstName:'',
        lastName:'',
        email: '' }}
     onSubmit={values => console.log(values)}
     validationSchema={signupSchema}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Button onPress={() => handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
        </>
    )
} 