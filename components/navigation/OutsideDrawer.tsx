import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
// import screens

import { Signup } from '../screens/Signup';
import { Login } from '../screens/Login';



const OutsideDrawer = () => {
    const Drawer = createDrawerNavigator();
    const dimensions = useWindowDimensions()
    const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: isLargeScreen ? 'permanent' : 'slide',
            drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
      },
      headerShown:false
        }}
    >
      <Drawer.Screen name="Create Account" component={Signup} />
      <Drawer.Screen name="Log In" component={Login} />
    </Drawer.Navigator>
  );
}

export default OutsideDrawer;