import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, Platform, ScrollView, TouchableWithoutFeedback, StyleSheet, View, TextInput, Pressable, KeyboardAvoidingView, Keyboard } from "react-native";
import { colors } from "../shared/colors";
import { Formik } from 'formik';
import { string } from "yup";



const FoodRoulette:FunctionComponent = () => {
    const [options, setOptions] = useState<String[]>([])

    const initialVals = {
        option: "",
    }

    const [randomChoice, setRandomChoice] = useState<String>("")
    const handleRoulette = () => {
        const random = options[Math.floor(Math.random() * (options.length))]
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
                    <ScrollView >
                        <View style={{marginBottom:100}}>
                            <Text style={{fontSize:80}}>WHERE ARE WE GOING?</Text>
                        </View>
                        <View>
                        {options.map((o,i) => {
                            return (
                            <View key={i}>
                                <Text style={{fontSize:20, color:"white"}} >
                                    {o.toUpperCase()}
                                </Text>
                            </View>
                            )
                        })}
                        </View>
                        <View style={styles.randomChoiceView}>
                            <Text 
                            style={styles.randomChoice}>{randomChoice}</Text>
                        </View>
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
                    
                    </ScrollView>
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