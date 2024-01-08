import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, ActivityIndicator, Pressable, View, StyleSheet, TextInput } from "react-native";
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
        <Container>
            <Text
             style={styles.headerView}>So... Who's Paying?</Text>
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
                {/* <View style={styles.formContainer}> */}
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
                    <Text style={{color: `${colors.accent}`, fontWeight:"bold", fontSize:18, }}>ADD </Text>
                </Pressable>
                </View>
                // </View>
                )}
             </Formik>
             <View>
             {options.map((o, i) => {
                return (
                    <Text 
                    key={i}
                    style={styles.optionPerson}>{o.toUpperCase()}</Text>
                )
             })}
           </View>
           
           <Pressable
             style={{backgroundColor:`${colors.accent}`, borderRadius:50, padding:10, margin:10}}
             onPress={() => {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    handlePickPerson();
                  }, 4000)
                
             }}
             >
                <Text>PICK FOR US</Text>
             </Pressable>
           {isLoading ? <ActivityIndicator size="large" color="white" /> : <></>} 
           
           <View
           style={styles.luckyView}
           >
            <Text 
            style={styles.luckyPerson}>{payPerson.toUpperCase()}</Text>
           </View>
        </Container>
    )
}

export default WhosPaying;

const styles = StyleSheet.create({
    headerView : {
        marginBottom: 50,
        color: "white",
        fontWeight: "bold", 
        fontSize:35
    },
    optionPerson : {
        color:"white",
    },
    
    luckyPerson: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },

    luckyView: {
        margin: 10
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
        color:'white',
        backgroundColor:`${colors.accent}`
     },
     form: {
        alignItems: 'center',
        width:'98%'
    },
})