import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { SafeAreaView, TouchableWithoutFeedback, View, Text, Platform, TextInput, Button, StyleSheet, Pressable, KeyboardAvoidingView, Keyboard } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from "../shared/colors";
import { useAuth } from "../context/AuthContext";

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
    const {onSignUp} = useAuth()

    const initialValues = { 
        firstName:'',
        lastName:'',
        email: '', 
        password:'',
        confirmPassword: '',
        }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Formik
                initialValues={initialValues}
                onSubmit={(values, {resetForm}) =>  {
                    console.log("Signup ln43:")
                    onSignUp!(values.firstName, values.lastName, values.email, values.password)
                    resetForm({values: initialValues})
                }
                }
                validationSchema={signupSchema}
                >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                <View style={styles.formContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    placeholder="first name..."
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                    placeholder="last name..."
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="email..."
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="password..."
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    placeholder="confirm password..."
                    />
                </View> 
                    <Pressable 
                    onPress={() => handleSubmit()} 
                    style={{margin:"auto", alignItems:"center", backgroundColor:`${colors.secondary}`, borderRadius:50, padding:10,}}
                >
                    <Text style={{color: `${colors.accent}`, fontWeight:"bold", fontSize:18,}}>CREATE ACCOUNT</Text>
                </Pressable>
                </View>
                </View>
                )}
                </Formik>
        
                </Container>
        </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
    
    )
} 


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
      },
    form: {
        alignItems: 'center'
    },
    formContainer: {
        padding: 20,
        marginTop: 50,
        borderRadius: 50,
        width: '80%',
        backgroundColor:`${colors.primary}`
    },

    title : {
        color: `white`,
        fontSize: 42,
        lineHeight: 60,
        fontWeight: 'bold',
        marginBottom: 15,
        opacity: 1,
     },
     inputWrapper: {
        marginBottom: 15,
     },
     inputStyle: {
        borderColor: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        color:'white',
     }
})