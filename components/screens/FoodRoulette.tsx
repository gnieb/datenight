import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, Platform, TouchableWithoutFeedback, StyleSheet, View, TextInput, Pressable, KeyboardAvoidingView, Keyboard } from "react-native";
import { colors } from "../shared/colors";
import { Formik } from 'formik';



const FoodRoulette:FunctionComponent = () => {

    const initialVals = {
        first: "",
        second:"",
        third:""
    }

    const [randomChoice, setRandomChoice] = useState("")
    const handleRoulette = (vals:any) => {
        // Object.values(vals) is an array of all the values in the values oject submitted thru formik
        const choices = Object.values(vals)
        const random = choices[Math.floor(Math.random() * (choices.length))]
        console.log(random )
        // console.log(Object.values(vals))
    }


    return(
        <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                <Formik
                initialValues={initialVals}
                onSubmit={(values, {resetForm}) =>  {
                    console.log(values)
                    handleRoulette(values)
                    resetForm({values: initialVals})
                }
                }
                // not going to validate, but if ypou want to, here it is:
                // validationSchema={validation schema here}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                    <View style={styles.formContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={handleChange('first')}
                            onBlur={handleBlur('first')}
                            value={values.first}
                            placeholder="Choices, choices, choices..."
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                            style={styles.inputStyle}
                            onChangeText={handleChange('second')}
                            onBlur={handleBlur('second')}
                            value={values.second}
                            placeholder="anotha one..."
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                            style={styles.inputStyle}
                            onChangeText={handleChange('third')}
                            onBlur={handleBlur('third')}
                            value={values.third}
                            placeholder="anotha one..."
                            />
                        </View>
                    
                    
                            <Pressable 
                            onPress={() => {
                                handleSubmit()
                                Keyboard.dismiss()
                            }} 
                            style={{margin:"auto", alignItems:"center", backgroundColor:`${colors.secondary}`, borderRadius:50, padding:10,}}
                        >
                            <Text style={{color: `${colors.accent}`, fontWeight:"bold", fontSize:18,}}>HELP US</Text>
                        </Pressable>
                    </View>
                </View>
                )}
                </Formik>
                <View>
                    <Text>FOOD PLACE HERE</Text>
                </View>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default FoodRoulette;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
      },
    form: {
        alignItems: 'center',
        width: '100%',
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