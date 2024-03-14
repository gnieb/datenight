import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, ActivityIndicator, Platform, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Pressable, View, StyleSheet, TextInput } from "react-native";
import { colors } from "../shared/colors";
import { Formik } from 'formik';


const WhosPaying:FunctionComponent = () => {
    const [payPerson, setPayPerson] = useState<String>("");
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [options, setOptions] = useState<String[]>([]);

    const addAnOption = (newOption:string) => {
        setOptions([...options, newOption ])
    }
    const handlePickPerson = () => {
        const random = options[Math.floor(Math.random() * (options.length))]
        setPayPerson(random)
    }

    const initialValues = {
        person : ""
    }

    return  (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <View style={{marginBottom:200, width:'100%', flexDirection:'row', justifyContent:'flex-end',  padding:10}}>
                <Pressable style={{ width:100, backgroundColor:`${colors.tertiary}`, borderRadius:50, padding:5}} ><Text style={{textAlign:"center"}} >START OVER</Text></Pressable>
            </View>
            <Text
             style={styles.headerView}>OK SO WHO'S PAYING?</Text>
             <Formik
             initialValues={initialValues}
                onSubmit={(values, {resetForm}) =>  {
                    console.log(values)
                    addAnOption(values.person)
                    resetForm({values: initialValues})
                }
                }
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.form}>
                <View >
                <View style={styles.inputWrapper}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('person')}
                    onBlur={handleBlur('person')}
                    value={values.person}
                    placeholder="add someone to the roulette..."
                    placeholderTextColor={colors.secondary}
                    />
                </View>
                    <Pressable 
                    onPress={() => {handleSubmit()}} 
                    style={{ alignItems:"center", backgroundColor:`${colors.secondary}`, borderRadius:50, padding:10, marginBottom:10}}
                >
                    <Text style={{color: `${colors.accent}`, fontWeight:"bold", fontSize:18, paddingHorizontal:10 }}>ADD </Text>
                </Pressable>
                </View>
                </View>
                )}
             </Formik>
             
           { options.length > 1? 
           <Pressable
             style={{backgroundColor:`${colors.primary}`, borderRadius:50, paddingHorizontal:60, paddingVertical:10 }}
             onPress={() => {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    handlePickPerson();
                  }, 4000)
                
             }}
             >
                <Text style={{ fontWeight:"bold"}}>PICK FOR US</Text>
             </Pressable>  
             
             : <></>}
            <View style={{flexDirection:"row"}}>

                <View style={{margin:50,}}>
                {options.map((o, i) => {
                    return (
                        <Text 
                        key={i}
                        style={styles.optionPerson}>{o.toUpperCase()}</Text>
                    )
                })}
                </View>    

                <View
                style={styles.luckyView}
                >
                        <Text style={styles.luckyPerson}>{payPerson.toUpperCase()}</Text>
                </View>

           </View>

           {isLoading ? <ActivityIndicator size="large" color="white" /> : <></>} 
           
           
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default WhosPaying;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      startOver: {
        textAlign: "right",
        marginBottom: 50,
      },
    headerView : {
        marginBottom: 50,
        padding: 5,
        color: "white",
        fontWeight: "bold", 
        fontSize:35
    },
    optionPerson : {
        color:"white",
        fontSize: 25,
        padding:1,
        fontWeight: "bold"
    },
    
    luckyPerson: {
        fontSize: 40,
        color: `${colors.olive}`,
        fontWeight: "bold"
    },

    luckyView: {
        margin: 50
    },
    inputWrapper: {
        marginBottom: 10,
     },
     inputStyle: {
        borderColor: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical:10,
        color:'black',
        backgroundColor:`${colors.accent}`
     },
     form: {
        alignItems: 'center',
        width:'98%',
        
    },
})