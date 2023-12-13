import { NavigationContainer } from "@react-navigation/native"
import MainStack from "./MainStack"

export const RootNav = () => {
    return (
        <NavigationContainer>
            {/* this is where the Screens Stack will go */}
            <MainStack />
        </NavigationContainer>
    )
}