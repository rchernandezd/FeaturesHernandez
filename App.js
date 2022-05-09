import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux'
import { StyleSheet } from 'react-native';
import store from './store';

export default function App() {

  return (
        //<ShopNavigator/>
    //<NavigationContainer>
    //  <TabNavigator/>
    //</NavigationContainer>
    //<LoginScreen/>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>

  );
}

const styles = StyleSheet.create({});
