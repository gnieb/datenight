import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, Platform, TouchableWithoutFeedback, StyleSheet, View, TextInput, Pressable, KeyboardAvoidingView, Keyboard } from "react-native";
import { colors } from "../shared/colors";
import { Formik } from 'formik';
import { string } from "yup";



const FoodRoulette:FunctionComponent = () => {
    const [options, setOptions] = useState<String[]>(["first thing", "second thing"])

    const initialVals = {
        option: "",
    }

    const [randomChoice, setRandomChoice] = useState<String>("")
    const handleRoulette = (vals:any) => {
        // Object.values(vals) is an array of all the values in the values oject submitted thru formik
        const choices = Object.values(vals)
        const random = choices[Math.floor(Math.random() * (choices.length))]
        console.log(random )
        setRandomChoice(random)
        // console.log(Object.values(vals))
    }

    const addOption = (val:string) => {
        setOptions([...options, val])
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
                    addOption(values.option)
                    resetForm({values: initialVals})
                }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                    <View style={styles.formContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={handleChange('option')}
                            onBlur={handleBlur('option')}
                            value={values.option}
                            placeholder="Choices, choices, choices..."
                            />
                        </View>
                            <Pressable 
                            onPress={() => {
                                handleSubmit()
                                Keyboard.dismiss()
                            }} 
                            style={{margin:"auto", alignItems:"center", backgroundColor:`${colors.secondary}`, borderRadius:50, padding:10,}}
                        >
                            <Text style={{color: `${colors.accent}`, fontWeight:"bold", fontSize:18,}}>ADD</Text>
                        </Pressable>
                    </View>
                </View>
                )}
                </Formik>
                <View>
                    {options.map((o,i) => {
                        return (
                        <View key={i}>
                            <Text >
                                {o.toUpperCase()}
                            </Text>
                        </View>
                        )
                    })}
                </View>
                <View style={styles.randomChoiceView}>
                    <Text style={styles.randomChoice}>WHERE ARE WE GOING?</Text>
                    <Text 
                    style={styles.randomChoice}>{randomChoice}</Text>
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
     }, 
     randomChoiceView: {
        paddingTop:40
     },
     randomChoice: {
        fontWeight:"bold",
        fontSize: 30,
        color: `${colors.accent}`
     }
})