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
    <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup}/>
        
    </Stack.Navigator>
    )
}

export default OutsideStack;