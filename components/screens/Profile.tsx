import { FunctionComponent } from "react";
import { SafeAreaView, Text, Pressable, StyleSheet } from "react-native";
import { Container } from "../shared/container";
import { useAuth } from "../context/AuthContext";


const Profile:FunctionComponent = () => {

    const {onLogout, authState, user} = useAuth()

    

    return  (
        <Container>
            <SafeAreaView>
            
                <Pressable 
                onPress={()=>  {
                    onLogout
                    console.log("pushed it")
                }}
                
                style={styles.logout} >
                    <Text style={{fontSize:18, fontWeight:"bold"}}>LOG OUT</Text>
                </Pressable>
            
            </SafeAreaView>
        </Container>
    )
}

export default Profile;

const styles = StyleSheet.create({
    logout : {
        backgroundColor: "white",
        borderRadius:50,
        padding: 8
    }
})