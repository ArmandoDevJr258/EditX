import React, { useState } from 'react';
import { View,Text,StyleSheet, TouchableOpacity,Image} from 'react-native'
import { useRouter } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
const about = () => {
     const router = useRouter()

  return (
    <View >
        <TouchableOpacity onPress={() => router.push('/about')}></TouchableOpacity>
       
    </View>
  )
}

export default about

const styles= StyleSheet.create({

})