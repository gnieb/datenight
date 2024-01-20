import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
// import screens
import Home from '../screens/Home';
import FoodRoulette from '../screens/FoodRoulette';
import Profile from '../screens/Profile';
import Explore from '../screens/Explore';
import WhosPaying from '../screens/WhosPaying';
import Chat from '../screens/Chat';



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
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Roulette" component={FoodRoulette} />
      <Drawer.Screen name="Explore" component={Explore} />
      <Drawer.Screen name="WhosPaying" component={WhosPaying} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Profile" component={Profile} />
      
    </Drawer.Navigator>
  );
}

export default Drawer;