import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import {Formik } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("We need your email to log you in"),
    password: Yup.string().required("Invlaid password")

})

export const Login:FunctionComponent= () => {
    return (
        <Container>
            <SafeAreaView>
                <Formik
                    initialValues={{ 
                        firstName:'',
                        lastName:'',
                        email: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={loginSchema}
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
            </SafeAreaView>
        </Container>
    )
}




