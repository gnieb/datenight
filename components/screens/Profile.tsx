import { FunctionComponent, useState, useEffect } from "react";
import { SafeAreaView, ImageBackground, Text, TextInput, Pressable, StyleSheet, View, Modal, Alert } from "react-native";
import { Container } from "../shared/container";
import { useAuth } from "../context/AuthContext";
import { Formik } from 'formik';
import { colors } from "../shared/colors";
import * as Yup from 'yup';
import { API_URL } from "../../assets/API";
import styled from "styled-components/native";
import background from "../../assets/photos/blurryholdinghands.avif"

const ImageBackgroundContainer = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Profile:FunctionComponent = () => {



    const {onLogout, user} = useAuth();
    const [showModal, setShowModal] = useState<boolean>(false);
    

    const handleOpen = () => {
        setShowModal(true);
    }

    const initialValues ={
        partnerUser: "",
    }

    const partnerSchema = Yup.object().shape({
        partnerUser: Yup.string().email("Not a valid email address").required("Please add your partner's email to connect"),
    })

    const findPartner = async (email:string) => {
        try {
            const res = (await fetch(`${API_URL}/findpartner`, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(email)
            }))
            const partner = await res.json()
            console.log(partner)
            return {userId : partner.user.id}
        } catch (e) {
            console.log("error finding your partner with this email address. Please try again.")
            return {error: true, msg: (e as any).response.data.msg}
        }
    }

    const testPartner = async (email:String) => {
        try {
            const res = (await fetch(`${API_URL}/test/${email}`, {
                method:"PATCH",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({partner_id : user.id})
                // this is actually going to EDIT THE PARTNER first. giving the users ID
            }))
            console.log("patch success!!!!!")
        } catch (e) {
            console.log("error finding your partner with this email address. Please try again.")
            return {error: true, msg: (e as any).response.data.msg}
        }
    }

    

    const handleConnect = async (partner:{userId:number}) => {
        // this will post to the user's record, an associated user id
        try {
            const res = await fetch(`${API_URL}/users/${user.id}`, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(partner)
            })
            console.log("Success! User partner associated")

        } catch (e) {
            console.error("Error connecting to partner:")
            return {error: true, msg:(e as any).response.data.msg}
        }
    }

    // how canI get the user's partner? 
    console.log(user.partner?.first)


    return  (
        <Container>
            <ImageBackgroundContainer
            source={background}
            style={styles.image}
            resizeMode="cover">
            <View style={styles.centeredView}>
                <View>
                    <Text
                    style={styles.partnerName}>
                       My Partner - {user.partner?.first.toUpperCase()}
                    </Text>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setShowModal(!showModal);
                    }}>
                    <View style={styles.centeredView}>

                         {/* this is the modal: */}
                    <View style={styles.modalView}>
                        {/* formik modal */}

                        <Formik
                initialValues={initialValues}
                onSubmit={(values, {resetForm}) =>  {
                    console.log(values)

                    testPartner(values.partnerUser)
                    // console.log(findPartner(values.partnerUser))
                    resetForm({values: initialValues})
                }
                }
                validationSchema={partnerSchema}
                >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.form}>
                {/* <View style={styles.formContainer}> */}
                <View style={styles.inputWrapper}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('partnerUser')}
                    onBlur={handleBlur('partnerUser')}
                    value={values.partnerUser}
                    placeholder="partner's email..."
                    placeholderTextColor={colors.secondary}
                    />
                </View>
                {errors.partnerUser && touched.partnerUser ? (
                  <Text style={{color:`${colors.accent}`, fontWeight:"900", fontStyle:"italic", width:"100%",}}>{errors.partnerUser}</Text>
                ) : null}
                    <Pressable 
                    onPress={() => {handleSubmit()}} 
                    style={{ alignItems:"center", backgroundColor:`${colors.secondary}`, borderRadius:50, padding:10, marginBottom:10}}
                >
                    <Text style={{color: `${colors.accent}`, fontWeight:"bold", fontSize:18, }}>SEND CONNECT REQUEST</Text>
                </Pressable>
                </View>
                // </View>
                )}
                </Formik>
                <View>
                    <Text></Text>

                </View>
                        
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setShowModal(!showModal)}>
                        <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                    {/* end of modal */}
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setShowModal(true)}>
                    <Text style={styles.textStyle}>Connect to your partner</Text>
                </Pressable>
                <Pressable 
                onPress={()=>  {
                    onLogout!()
                    console.log("logging out")
                }} 
                style={styles.logout} >
                    <Text style={{fontSize:18, fontWeight:"bold"}}>LOG OUT</Text>
                </Pressable>
            </View>
            </ImageBackgroundContainer>
        </Container>
    )
}

export default Profile;


const styles = StyleSheet.create({
    image :{
        flex: 1,
        width: '100%',
    },
    centeredView: {
      padding: 50,  
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: `${colors.base}`
    },
    modalView: {
      margin: 20,
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 50,
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
      backgroundColor: `${colors.olive}`,
    },
    buttonClose: {
      backgroundColor: 'black',
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
        backgroundColor: `${colors.primary}`,
        borderRadius:50,
        padding: 8, 
        margin: 10
    },
    form: {
        alignItems: 'center',
        width:'98%'
    },
    // formContainer: {
    //     padding: 20,
    //     marginTop: 50,
    //     borderRadius: 50,
    //     width: '80%',
    //     backgroundColor:`${colors.primary}`
    // },

    title : {
        color: `white`,
        fontSize: 42,
        lineHeight: 60,
        fontWeight: 'bold',
        marginBottom: 15,
        opacity: 1,
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
     partnerName : {
        color:"white",
        fontWeight: "bold",
        margin:10,
        fontStyle: "italic"
     }
  });