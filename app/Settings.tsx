import React, { useState } from 'react';
import { View,Text,StyleSheet, TouchableOpacity,Image, Modal, Pressable,FlatList} from 'react-native'
import { useRouter } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';

const Settings = () => {
     const router = useRouter()
    const [modalVisible, setModalVisible] = useState(false);
    const languages =[
         'English',
         'French',
         'Spanish',
         'German',
         'Italian',
         'Russian',
         'Japanese',
         'Portuguese',
         'Chinese',
         'Korean',
    ]


  return (
    <View style={styles.contentView}>
        <TouchableOpacity style={styles.backbtn} 
>
            <Image 
                source={require('../assets/images/left-arrow.png')}
                style={{width:20,height:20,tintColor:'white'}}
                />
            
        </TouchableOpacity>
        <Text style={styles.Title}>Settings</Text>


        <View style={styles.content}>

            <Text style={styles.text}>Appearance / Theme</Text>
            <TouchableOpacity style={styles.btnmenu} onPress={()=>router.push('./Apearence')}>
                <Image 
                source={require('../assets/images/back.png')}
                style={{width:20,height:20,tintColor:'white'}}
                />
            </TouchableOpacity>

            <Text style={styles.text}>Image Quality</Text>
            <TouchableOpacity style={styles.btnmenu}>
                <Image 
                source={require('../assets/images/back.png')}
                style={{width:20,height:20,tintColor:'white'}}
                />
            </TouchableOpacity>

            <Text style={styles.text}>Language</Text>
            <TouchableOpacity style={styles.btnmenu}  onPress={() => setModalVisible(true)} >
                <Image 
                source={require('../assets/images/back.png')}
                style={{width:20,height:20,tintColor:'white'}}
                />
            </TouchableOpacity>

            <Text style={styles.text}>Tools Preferences</Text>
            <TouchableOpacity style={styles.btnmenu}>
                <Image 
                source={require('../assets/images/back.png')}
                style={{width:20,height:20,tintColor:'white'}}
                />
            </TouchableOpacity>

            <Text style={styles.text}>Accessibility</Text>
            <TouchableOpacity style={styles.btnmenu}>
                <Image 
                source={require('../assets/images/back.png')}
                style={{width:20,height:20,tintColor:'white'}}
                />
            </TouchableOpacity>

            <Text style={styles.text}>Privacy & Permissions</Text>
            <TouchableOpacity style={styles.btnmenu}>
                <Image 
                source={require('../assets/images/back.png')}
                style={{width:20,height:20,tintColor:'white'}}
                />
            </TouchableOpacity>

            <Text style={styles.text}>About / Info</Text>
            <TouchableOpacity style={styles.btnmenu} onPress={() => router.push('/About')}>
                <Image 
                source={require('../assets/images/back.png')}
                style={{width:20,height:20,tintColor:'white'}}
                />
            </TouchableOpacity>
        </View>
          <Modal
        animationType="slide"      // modal animation style
        transparent={true}         // whether the modal has transparent background
        visible={modalVisible}     // control modal visibility
        onRequestClose={() => setModalVisible(false)} // Android back button handler
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text>Select a language</Text>

            <FlatList
             
            data={languages}
             keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ padding: 10,fontSize:30 }}>{item}</Text>
        )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>close</Text>
            </TouchableOpacity>

           
          </View>
        </View>
      </Modal>
          



    </View>
  )
}

export default Settings

const styles= StyleSheet.create({
contentView:{
    backgroundColor:'black',
    flex:1

},
backbtn:{
    marginLeft:30,
    marginTop:45
},
    Title:{
        fontSize:20,
        marginTop:-20,
        textAlign:'center',
        fontWeight:'bold',
        color:'white'

    },
    content:{
        marginTop:100

    },
    text:{
        marginLeft:60,
        fontSize:20,
        fontWeight:'bold',
         color:'white'
        
        
    },

    btnmenu:{
        marginLeft:300,
        marginTop:-20,
        marginBottom:30

    },modalOverlay: {
    flex: 1,
    backgroundColor: '#00000099', // semi-transparent black
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',  // semi-transparent black background
    justifyContent: 'center',
  alignItems:'center'
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,  // shadow on Android
    shadowColor: '#000',  // shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignItems: 'center',
  }
})