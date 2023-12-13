import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";


const Home: FunctionComponent = () => {

    return (
        
    <Container>
        <SafeAreaView>
            <Text style={{color:"white"}}>WELCOME</Text>
        </SafeAreaView> 
    </Container>
       
    )
    
}

export default Home;