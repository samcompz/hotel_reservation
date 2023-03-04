import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import SearchHotels from './SearchHotels';
import SignUp from './SignUp';
import LoginScreen from './Login';
import GuestManagement from './GuestManagement';
import RoomManagement from './RoomManagement';
import Booking from './Booking';
import Gallery from './Gallery';
import Profile from './Profile';

export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SearchHotels" component={SearchHotels} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GuestManagement" component={GuestManagement} />
        <Stack.Screen name="RoomManagement" component={RoomManagement} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


