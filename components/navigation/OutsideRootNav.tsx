import { FunctionComponent } from "react";
import OutsideStack from "./OutsideStack";
import { NavigationContainer } from "@react-navigation/native"

const OutsideRootNav:FunctionComponent = () => {
    return (
        <NavigationContainer>
            <OutsideStack />
        </NavigationContainer>
    )
}

export default OutsideRootNav;