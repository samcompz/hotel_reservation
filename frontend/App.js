import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import SearchHotels from './SearchHotels';
import SignUp from './SignUp';
import LoginScreen from './Login';
import GuestManagement from './GuestManagement';

export default function App() {

  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="SearchHotels" component={SearchHotels} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="GuestManagement" component={GuestManagement} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="Screen2" component={Screen2} /> */}
      </Drawer.Navigator>
    </NavigationContainer>

  );
}


