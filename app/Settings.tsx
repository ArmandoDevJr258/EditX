import React, { useState } from 'react';
import { View,Text,StyleSheet, TouchableOpacity,Image} from 'react-native'
import { useRouter } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
const Settings = () => {
     const router = useRouter()

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
            <TouchableOpacity style={styles.btnmenu}>
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
            <TouchableOpacity style={styles.btnmenu}>
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

    }
})