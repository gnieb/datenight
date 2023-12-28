import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { Text, View } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";


const Home: FunctionComponent = () => {

    const {user} = useAuth();

    return (
        
    <Container>
        <View style={styles.container}>
            <Text style={{color:"white"}}>WELCOME {user.first}</Text>
        </View>
    </Container>
       
    )
    
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: "center"
    }
})