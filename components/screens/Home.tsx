import { FunctionComponent } from "react";
import { Container } from "../shared/container";
import { Text, View, ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components/native";
import background from "../../assets/photos/blurryholdinghands.avif"

const ImageBackgroundContainer = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Home: FunctionComponent = () => {

    const {user} = useAuth();
    console.log(user)

    return (
        
    <Container>
        <ImageBackgroundContainer
                source={background}
                style={styles.image}
                resizeMode="cover"
                >
            <View style={styles.container}>
                <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>HEY {user.first.toUpperCase()}</Text>
            </View>
        </ImageBackgroundContainer>
    </Container>
       
    )

    
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: "center",
    },
    textStyle: {
           fontSize: 25,
           fontWeight: 'bold',
           padding: 10,
           color:'white',
           marginBottom: 60,
           marginTop: 80,
           margin:50,
        }, 
        image: {
            flex: 1,
            width: '100%',
        }
})