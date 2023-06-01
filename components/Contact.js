
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,FlatList} from 'react-native';
const Contact=()=>{
    const navigation=useNavigation();
    const isfocused=useIsFocused();
    const [contactList,setContactList]=useState([]);
    useEffect(()=>{
        getData();
    },[isfocused]);
    const getData=async()=>{
        const contacts=await AsyncStorage.getItem('CONTACTS');
        setContactList(JSON.parse(contacts));    
    };
    const deleteContact=async(index)=>{
        const teamData=contactList;
        const selectedData=teamData.filter((item,ind)=>{
            return ind!=index;
        })
        setContactList(selectedData);
        await AsyncStorage.setItem('CONTACTS', JSON.stringify(selectedData));


    }
    const logout=async()=>{
      await AsyncStorage.setItem('EMAIL','');
      await AsyncStorage.setItem('PASSWORD','');
      navigation.navigate('Login');  
    }
    return(
        <View style={styles.container}>
            <FlatList data={contactList}
            renderItem={({item,index})=>{
                return(
                    <View style={styles.stl}>
                        <View style={{flexDirection:'row'}}>
                        <Text>{item.name.toUpperCase()}</Text>
                        <Text style={{marginLeft:20}}>{item.mobile}</Text>
                        </View>
                        <TouchableOpacity 
                        
                        onPress={()=>{
                            deleteContact(index)
                        }}
                        style={styles.bbtn}>
                            <Text style={{color:'#fff'}}>Delete</Text>
                        </TouchableOpacity>

                    </View>
                )
            }}/>
            <TouchableOpacity 
             style={styles.btn} 
             onPress={()=>{
                navigation.navigate('AddContact');
             }}
             >
<Text style={{color:'#fff'}}>Add new contact</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             style={styles.btnwipro} 
             onPress={()=>{
                logout();
             }}
             >
<Text style={{color:'#fff'}}>LogOut</Text>
            </TouchableOpacity>
            
        </View>
    )
} 
const styles=StyleSheet.create({
container:{
   flex:1 
},
btn:{
    width:200,
    height:50,
    backgroundColor:"#000",
    position:'absolute',
    bottom:20,
    right:20,
    borderRadius:25,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center' 

},
btnwipro:{
    width:100,
    height:50,
    backgroundColor:"#000",
    position:'absolute',
    bottom:20,
    left:20,
    borderRadius:25,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center'

},
stl:{
  width:"90%",
  height:50,
  borderWidth:1,
  alignSelf:'center',
  borderRadius:10,
  marginTop:10,
  flexDirection:'row',
  alignItems:'center',
  paddingLeft:20,
  justifyContent:'space-between',


},
bbtn:{
    backgroundColor:'red',
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginRight:20,
    paddingLeft:10,
    paddingRight:10,

    
},
})
export default Contact;

