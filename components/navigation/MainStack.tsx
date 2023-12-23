import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Drawer
import Drawer from "./Drawer";
// import screens
import Home from "../screens/Home";
import FoodRoulette from "../screens/FoodRoulette";
import Profile from "../screens/Profile";

export type MainStackParams = {
    Drawer: undefined;
    Home: undefined;
    FoodRoulette: undefined;
    Profile: undefined;
}


const MainStack = () => {

    const Stack = createNativeStackNavigator<MainStackParams>();

    
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            {/* screens here  */}
            <Stack.Screen name="Drawer" component={Drawer} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="FoodRoulette" component={FoodRoulette}/>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default MainStack;