import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OutsideDrawer from "./OutsideDrawer";
import { Signup } from "../screens/Signup";
import { Login } from "../screens/Login";


export type OutsideStackParams = {
    OutsideDrawer:undefined;
    Signup:undefined;
    Login:undefined;
}

const OutsideStack = () => {

    const Stack = createNativeStackNavigator<OutsideStackParams>();

    return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name="OutsideDrawer" component={OutsideDrawer} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
    )
}

export default OutsideStack;