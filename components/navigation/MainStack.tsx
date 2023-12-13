import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import FoodRoulette from "../screens/FoodRoulette";

const MainStackProps = {

}


const MainStack = () => {

    const Stack = createNativeStackNavigator();

    
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >

            {/* screens here  */}
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="FoodRoulette" component={FoodRoulette}/>
        </Stack.Navigator>
    )
}

export default MainStack;