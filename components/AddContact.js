// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from "@react-navigation/native";

// function AddContact() {
//     const navigation=useNavigation();
//     let contacts = [];
//     const [name, setName] = useState('');
//     const [mobile, setMobile] = useState('');
//     const saveContact = async() => {
//         let teamConatct=[];
//         contacts=[];
//        let x =JSON.parse(await AsyncStorage.getItem('CONTACTS'));
//        teamConatct=x;
//         teamConatct.map(item =>{
//             contacts.push(item); 
//         });
//         contacts.push({ name: name, mobile: mobile });
//         console.log(contacts);
//         await AsyncStorage.setItem('CONTACTS',JSON.stringify(contacts));
//         navigation.goBack();

//     };
//     return (
//         <View style={{ flex: 1 }}>
//             <TextInput
//                 placeholder='Enter your Name'
//                 value={name}
//                 onChangeText={txt => setName(txt)
//                 }
//                 style={styles.container} />
//             <TextInput
//                 value={mobile}
//                 keyboardType="number-pad"
//                 onChangeText={txt => setMobile(txt)}
//                 placeholder='Enter your MobileNumber'
//                 style={styles.container} />
//             <TouchableOpacity
//                 onPress={() => {
//                     saveContact();
//                 }}
//                 style={styles.txt} >
//                 <Text style={{ color: '#fff' }}>saveContact</Text>

//             </TouchableOpacity>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         width: '90%',
//         height: 50,
//         borderWidth: 2,
//         alignSelf: 'center',
//         marginTop: 50,
//         borderRadius: 10,
//         paddingLeft: 20

//     },
//     txt: {
//         backgroundColor: '#000',
//         height: 50,
//         borderRadius: 10,
//         alignSelf: 'center',
//         width: '90%',
//         marginTop: 30,
//         justifyContent: 'center',
//         alignItems: 'center',

//     },

// })
// export default AddContact;
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

function AddContact() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const saveContact = async () => {
    try {
      const existingContacts = await AsyncStorage.getItem('CONTACTS');
      let contacts = existingContacts ? JSON.parse(existingContacts) : [];

      contacts.push({ name: name, mobile: mobile });
      await AsyncStorage.setItem('CONTACTS', JSON.stringify(contacts));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder='Enter your Name'
        value={name}
        onChangeText={txt => setName(txt)}
        style={styles.container}
      />
      <TextInput
        value={mobile}
        keyboardType="number-pad"
        onChangeText={txt => setMobile(txt)}
        placeholder='Enter your MobileNumber'
        style={styles.container}
      />
      <TouchableOpacity
        onPress={() => {
          saveContact();
        }}
        style={styles.txt}
      >
        <Text style={{ color: '#fff' }}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
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
    alignItems: 'center'
  },
});

export default AddContact;
