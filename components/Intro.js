import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyleSheet,View,Text } from 'react-native';
function Intro(){
    const navigation=useNavigation();
    const isFocused=useIsFocused();
    useEffect(()=>{
        setTimeout(()=>{
            checkLogin();
        },3000)
    },[isFocused]);
    const checkLogin=async()=>{
        const email=await AsyncStorage.getItem('EMAIL');
        const pass= await AsyncStorage.getItem('PASSWORD');
         if(email !== null )
         {
           navigation.navigate('Contact');

         }
         else{
navigation.navigate('Login');
         }
    }
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'red',fontSize:20,alignSelf:'center',marginTop:100}}>MyApp container</Text>
        </View>
    )
}
const styles=StyleSheet.create({

})
export default Intro;