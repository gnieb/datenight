import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootNav } from './components/navigation/RootNav';
import SafeAreaView from 'react-native-safe-area-view';
import { useAuth, AuthProvider } from './components/context/AuthContext';
import { FunctionComponent } from 'react';
import OutsideRootNav from './components/navigation/OutsideRootNav';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Gateway />
    </AuthProvider>
  );
};


const Gateway:FunctionComponent = () => {

  const {authState} = useAuth()

  return authState?.authenticated? <RootNav/> :  <OutsideRootNav />

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
