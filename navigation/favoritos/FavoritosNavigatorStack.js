import FavoritosScreen from '../../screens/FavoritosScreen.js'
import color from "../../constants/color";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";

//import { Platform } from "react-native";




const Stack = createNativeStackNavigator();

const FavoritosNavigatorStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Favoritos"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? color.Primario : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : color.Primario,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen
                name="Favoritos"
                component={FavoritosScreen}
                options={{ title: 'Favoritos' }}
            />
        </Stack.Navigator>
    )
};

export default FavoritosNavigatorStack;