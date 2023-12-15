import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { Formik } from 'formik';


export const Signup:FunctionComponent = () => {
    return (
        <>
        <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
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