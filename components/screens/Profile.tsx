import { FunctionComponent, useState, useEffect } from "react";
import { SafeAreaView, Text, Pressable, StyleSheet, View, Modal, Alert } from "react-native";
import { Container } from "../shared/container";
import { useAuth } from "../context/AuthContext";


const Profile:FunctionComponent = () => {

    const {onLogout, user} = useAuth();
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleOpen = () => {
        setShowModal(true);
    }


    return  (
        <Container>
            <SafeAreaView>
                
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setShowModal(!showModal);
                    }}>
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setShowModal(!showModal)}>
                        <Text style={styles.textStyle}>Connect</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setShowModal(!showModal)}>
                        <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setShowModal(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
                </View>
     
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    logout : {
        backgroundColor: "white",
        borderRadius:50,
        padding: 8
    }
  });