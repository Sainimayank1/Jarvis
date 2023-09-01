import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Welcome'>
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
    </Stack.Navigator>
  );
}

export default AppNavigation;