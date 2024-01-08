import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, ActivityIndicator, Pressable, View } from "react-native";
import { colors } from "../shared/colors";
import { Formik } from 'formik';


const WhosPaying:FunctionComponent = () => {
    const [payPerson, setPayPerson] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [options, setOptions] = useState<String[]>(["noah", "sam", "jack", "grace"]);

    const addAnOption = (newOption:string) => {
        setOptions([...options, newOption ])
    }
    const handlePickPerson = () => {

    }

    return  (
        <Container>
            <Text
             style={{color:"white", fontWeight:"bold"}}>So... Who's Paying?</Text>
             <Pressable
             style={{backgroundColor:`${colors.accent}`, borderRadius:50, padding:10, margin:10}}
             onPress={() => {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                  }, 4000)

             }}
             >
                <Text>PICK FOR US</Text>
             </Pressable>
           {isLoading ? <ActivityIndicator size="large" color={colors.accent} /> : <></>} 
           <View>
             {options.map(o => {
                return (
                    <Text>{o}</Text>
                )
             })}
           </View>
        </Container>
    )
}

export default WhosPaying;