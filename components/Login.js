import React, {  useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
   const navigation = useNavigation();
    const saveemilpass = async  () => {
        try{
        await AsyncStorage.setItem('EMAIL', email);
        await AsyncStorage.setItem('PASSWORD', Password);
        navigation.navigate('Contact');
        }catch(e){
            console.log(e);
        }
    };
   
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 100, fontWeight: '600' }}>Login page</Text>
            <TextInput
                placeholder='Enter your Email Id'
                value={email}
                onChangeText={txt => setEmail(txt)
                }
                style={styles.container} />
            <TextInput
                value={Password}
                onChangeText={txt => setPassword(txt)}
                placeholder='Enter your Password'
                style={styles.container} />
            <TouchableOpacity
onPress={()=>{
    saveemilpass();
}}
                style={styles.txt} >
                <Text style={{ color: '#fff' }}>Login</Text>

            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 10,
        paddingLeft: 20

    },
    txt: {
        backgroundColor: '#000',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        width: '90%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
   

})
export default Login;