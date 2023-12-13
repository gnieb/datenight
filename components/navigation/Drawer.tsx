import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
// import screens
import Home from '../screens/Home';
import FoodRoulette from '../screens/FoodRoulette';



const Drawer = () => {
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
      <Drawer.Screen name="Feed" component={Home} />
      <Drawer.Screen name="Article" component={FoodRoulette} />
    </Drawer.Navigator>
  );
}

export default Drawer;