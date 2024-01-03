import { FunctionComponent, useState, useEffect } from "react";
import { SafeAreaView, Text, Pressable, StyleSheet, View } from "react-native";
import { Container } from "../shared/container";
import { useAuth } from "../context/AuthContext";


const Profile:FunctionComponent = () => {

    const {onLogout, user} = useAuth();
    const [connectOpen, setConnectOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setConnectOpen(true);
    }


    return  (
        <Container>
            <SafeAreaView>
                
                    <Pressable
                    style={styles.logout}
                    onPress={() =>{
                        console.log("connecting...")
                        handleOpen()
                    }}
                    >
                        <Text style={{fontSize:18, fontWeight:"bold"}}>Connect to your partner</Text>
                    </Pressable>
                    {   connectOpen ? <Text>FORM</Text> :
                    <View>
                        <Text>form closed</Text>
                    </View>
                    }
     
                <Pressable 
                onPress={()=>  {
                    onLogout
                    console.log("logging out")
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