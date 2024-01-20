import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Drawer
import Drawer from "./Drawer";
// import screens
import Home from "../screens/Home";
import FoodRoulette from "../screens/FoodRoulette";
import Profile from "../screens/Profile";
import WhosPaying from "../screens/WhosPaying";
import Chat from "../screens/Chat";

export type MainStackParams = {
    Drawer: undefined;
    Home: undefined;
    FoodRoulette: undefined;
    Profile: undefined;
    WhosPaying: undefined;
    Chat:undefined;
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
            <Stack.Screen name="WhosPaying" component={WhosPaying} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default MainStack;