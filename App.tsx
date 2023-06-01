import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import Intro from './components/Intro';
import Login from './components/Login';
import Contact from './components/Contact';
import AddContact from './components/AddContact';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Intro" 
          component={Intro} 
          options={{headerShown:false}} />
        
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown:false}}
           
          />
          <Stack.Screen name="Contact" 
          component={Contact} 
          options={{headerShown:false}}/>
          <Stack.Screen 
          name="AddContact"
          component={AddContact}/> 
        </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
export default App;