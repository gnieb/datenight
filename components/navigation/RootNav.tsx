import { NavigationContainer } from "@react-navigation/native"
import MainStack from "./MainStack"

export const RootNav = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}