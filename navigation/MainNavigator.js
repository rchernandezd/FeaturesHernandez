import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator';
import react from "react";

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default MainNavigator;