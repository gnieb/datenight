import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, ActivityIndicator, Pressable, View, StyleSheet } from "react-native";
import { colors } from "../shared/colors";
import { Formik } from 'formik';


const WhosPaying:FunctionComponent = () => {
    const [payPerson, setPayPerson] = useState<String>("");
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [options, setOptions] = useState<String[]>(["noah", "sam", "jack", "grace"]);

    const addAnOption = (newOption:string) => {
        setOptions([...options, newOption ])
    }
    const handlePickPerson = () => {
        const random = options[Math.floor(Math.random() * (options.length))]
        setPayPerson(random)
    }

    return  (
        <Container>
            <Text
             style={styles.headerView}>So... Who's Paying?</Text>
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
    }
})