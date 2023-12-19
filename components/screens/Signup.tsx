import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';


const signupSchema = Yup.object().shape({
    firstName: Yup.string().required("Please add your first name here"),
    lastName:Yup.string().required("Please add your last name"),
    email:Yup.string().email("Not a valid email address").required("Please add your email to get started!"),
    password: Yup.string().required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    // use the regex???? 
    confirmPassword: Yup.string().required('Please confirm password').oneOf([Yup.ref('password')], "Passwords do not match")
})

export const Signup:FunctionComponent = () => {
    return (
        <Container>
        <SafeAreaView>
            <Formik
            initialValues={{ 
                firstName:'',
                lastName:'',
                email: '', 
                password:'',
                confirmPassword: '',
                }}
            onSubmit={values => console.log(values)}
            validationSchema={signupSchema}
            >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
                <TextInput
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                />
                <TextInput
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                />
                <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                />
                <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                />
                <TextInput
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                />
                <Button onPress={() => handleSubmit} title="Submit" />
            </View>
            )}
            </Formik>
        </SafeAreaView>
    </Container>
    )
} 