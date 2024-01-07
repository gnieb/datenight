import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, ActivityIndicator, Pressable } from "react-native";
import { colors } from "../shared/colors";


const WhosPaying:FunctionComponent = () => {
    const [payPerson, setPayPerson] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return  (
        <Container>
            <Text
             style={{color:"white", fontWeight:"bold"}}>So... Who's Paying?</Text>
             <Pressable
             style={{backgroundColor:`${colors.accent}`, borderRadius:50, padding:10, margin:10}}
             onPress={() => {
                setIsLoading(!isLoading)

             }}
             >
                <Text>PICK FOR US</Text>
             </Pressable>
           {isLoading ? <ActivityIndicator size="large" /> : <></>} 
        </Container>
    )
}

export default WhosPaying;