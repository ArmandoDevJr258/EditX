import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Templates = () => {
  return (
    <View>
<Text style={styles.title}>Get started with ready Templates</Text>
<View style={styles.contentView}>
  <View style={styles.card}></View>

</View>
    </View>
  )
}

export default Templates

const styles = StyleSheet.create({
  title:{
    textAlign:"center",
    fontSize:20,
    marginTop:20
  },
contentView:{
  marginTop:50,

  },
  card:{
    backgroundColor:'gray',
    width:100,
    height:100,
    margin:20
  }
})