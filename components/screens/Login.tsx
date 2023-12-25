import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { View, Text, TextInput, ImageBackground, StyleSheet, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import {Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from "../shared/colors";
import { useAuth } from "../context/AuthContext";
import walking from '../../assets/photos/blurrywalking.avif'

const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("We need your email to log you in"),
    password: Yup.string().required("Invalid password")
})

export const Login:FunctionComponent= () => {

    const {onLogin} = useAuth();

    // const tryLoggingIn = (email:string, password:string) => {
    //     onLogin(email, password)
    // }

    return (
        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                    <ImageBackground
                        source={walking}
                        resizeMode="cover" 
                        style={styles.image}
                    >
                    <Formik
                        initialValues={{ 
                            email: '',
                            password: '', 
                        }}
                        onSubmit={(values) => {
                            console.log(values)
                            onLogin!(values.email, values.password)
                        }
                            
                        }
                        validationSchema={loginSchema}
                    >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.form}>
                    <View style={styles.formContainer}>
                        <View style={styles.inputWrapper}>
                        <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        style={styles.inputStyle}
                        placeholder="email..."
                        placeholderTextColor={colors.accent}
                        />
                        </View>
                        <View style={styles.inputWrapper}>
                        <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        style={styles.inputStyle}
                        placeholder="password..."
                        placeholderTextColor={colors.accent}
                        />
                        </View>
                        <Pressable
                        style={{margin:"auto", alignItems:"center", backgroundColor:`${colors.secondary}`, borderRadius:50, padding:10,}}
                        onPress={() => handleSubmit}>
                            <Text style={{color: `${colors.accent}`, fontWeight:"bold", fontSize:18}}>LOG IN</Text>
                        </Pressable>
                    </View>
                    </View>
                    )}
                    </Formik>
                    </ImageBackground>
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
        backgroundColor:`black`,
        opacity: 0.7,
        width: '70%',
        alignContent: 'center',

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
        borderColor: `${colors.secondary}`,
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        color:'white',
     },
     image: {
        flex: 1,
        justifyContent: 'center',
      },
    })




