import { FunctionComponent, useState } from "react";
import { Container } from "../shared/container";
import { Text, ActivityIndicator } from "react-native";


const WhosPaying:FunctionComponent = () => {
    const [payPerson, setPayPerson] = useState();


    return  (
        <Container>
            <Text>So... Who's Paying Tonight?</Text>
            <ActivityIndicator size="large" />
        </Container>
    )
}

export default WhosPaying;