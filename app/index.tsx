import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { useRouter } from 'expo-router'





const Index = () => {
   const router = useRouter()
  const [screen, setScreen] = useState<'home' | 'settings' | 'gallery'>('home');
  const [isVisible, setVisible] = useState(false);
  const [showAppearance, setShowAppearance] = useState(false);
  const [showAppearances, setShowAppearances] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Show title and settings button ONLY if settings and appearance are NOT visible */}

        <>
          <Text style={styles.appName}>EditX</Text>
          <TouchableOpacity style={styles.btnSettings}  onPress={() => router.push('/Settings')}>
            <Image
              source={require('../assets/images/settings2.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </>
    

        <View style={styles.div}>
          <TouchableOpacity style={styles.card} onPress={openGallery}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.gallery} />
            ) : (
              <Image
                source={require('../assets/images/gallery.png')}
                style={styles.gallery}
              />
            )}
            <Text style={styles.cardText}>Gallery</Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <Image
              source={require('../assets/images/download.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Templates</Text>
          </View>

          <View style={styles.card}></View>
        </View>
   
    </View>
  );
};

export default Index;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    color: 'blue',
  },
  btnSettings: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  div: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'gray',
    width: 100,
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gallery: {
    width: 60,
    height: 60,
    tintColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardText: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    color: 'darkblue',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  settingsView: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  settings: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  settingsText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 35,
    marginLeft: 70,
  },
  btn: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: -30,
  },
  btnset: {
    marginLeft: 320,
    marginTop: -20,
  },
  sView: {
    marginTop: 100,
  },
  appearanceView: {
    flex: 1,
    backgroundColor: '#695b5bff',
    paddingTop: 20,
  },
});
