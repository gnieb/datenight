import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import {Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from "../shared/colors";
import { useAuth } from "../context/AuthContext";


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
        <Container>
            <SafeAreaView>
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
                <View style={styles.formContainer}>
                    <View style={styles.inputWrapper}>
                    <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={styles.inputStyle}
                    placeholder="email..."
                    />
                    </View>
                    <View style={styles.inputWrapper}>
                    <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={styles.inputStyle}
                    placeholder="password..."
                    />
                    </View>
                    <Pressable
                    style={{margin:"auto", alignItems:"center", backgroundColor:`${colors.secondary}`, borderRadius:50, padding:10,}}
                     onPress={() => handleSubmit}>
                        <Text style={{color: `${colors.accent}`, fontWeight:"bold", fontSize:18}}>LOG IN</Text>
                     </Pressable>
                </View>
                )}
                </Formik>
            </SafeAreaView>
        </Container>
    )
}

const styles = StyleSheet.create({

    formContainer: {
        padding: 20,
        marginTop: 50,
        borderRadius: 50,
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
        borderColor: `${colors.secondary}`,
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        color:'white',
     }
    })




