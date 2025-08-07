import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { navigate } from 'expo-router/build/global-state/routing'; // Unused import, you can remove it

const Index = () => {
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
      {!isVisible && !showAppearance && !showAppearances && !showTools && (
        <>
          <Text style={styles.appName}>EditX</Text>
          <TouchableOpacity style={styles.btnSettings} onPress={() => {
            setVisible(true);
            setShowAppearance(false);
            setShowAppearances(false);
            setShowTools(false);
          }}>
            <Image
              source={require('../assets/images/settings2.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </>
      )}

      {/* Settings view (hidden if Appearance or Appearances or Tools view is visible) */}
      {isVisible && !showAppearance && !showAppearances && !showTools && (
        <View style={styles.settingsView}>
          <Text style={styles.settings}>Settings</Text>

          <TouchableOpacity onPress={() => setVisible(false)} style={styles.btn}>
            <Image
              source={require('../assets/images/left-arrow.png')}
              style={{ width: 20, height: 20, tintColor: 'white' }}
            />
          </TouchableOpacity>

          <View style={styles.sView}>
            <Text style={styles.settingsText}>Appearance</Text>
            <TouchableOpacity
              style={styles.btnset}
              onPress={() => {
                setShowAppearance(true);
                setVisible(false);
                setShowAppearances(false);
                setShowTools(false);
              }}
            >
              <Image
                source={require('../assets/images/back.png')}
                style={{ width: 15, height: 15, tintColor: 'white' }}
              />
            </TouchableOpacity>

            <Text style={styles.settingsText}>Tools Preferences</Text>
            <TouchableOpacity
              style={styles.btnset}
              onPress={() => {
                setShowAppearances(true);
                setVisible(false);
                setShowAppearance(false);
                setShowTools(false);
              }}
            >
              <Image
                source={require('../assets/images/back.png')}
                style={{ width: 15, height: 15, tintColor: 'white' }}
              />
            </TouchableOpacity>

            <Text style={styles.settingsText}>Storage & Cache</Text>
            <TouchableOpacity style={styles.btnset}>
              <Image
                source={require('../assets/images/back.png')}
                style={{ width: 15, height: 15, tintColor: 'white' }}
              />
            </TouchableOpacity>

            <Text style={styles.settingsText}>Image Quality & Format</Text>
            <TouchableOpacity style={styles.btnset}>
              <Image
                source={require('../assets/images/back.png')}
                style={{ width: 15, height: 15, tintColor: 'white' }}
              />
            </TouchableOpacity>

            <Text style={styles.settingsText}>Accessibility</Text>
            <TouchableOpacity style={styles.btnset}>
              <Image
                source={require('../assets/images/back.png')}
                style={{ width: 15, height: 15, tintColor: 'white' }}
              />
            </TouchableOpacity>

            <Text style={styles.settingsText}>About / Info</Text>
            <TouchableOpacity style={styles.btnset}>
              <Image
                source={require('../assets/images/back.png')}
                style={{ width: 15, height: 15, tintColor: 'white' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Appearance view with back button */}
      {showAppearance && (
        <View style={styles.appearanceView}>
          <TouchableOpacity onPress={() => setShowAppearance(false)} style={{ marginLeft: 20, marginBottom: 10 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>{'< Back'}</Text>
          </TouchableOpacity>
          <Text style={styles.settings}>Appearance</Text>
          {/* Your Appearance content here */}
        </View>
      )}

      {/* Appearances view with back button */}
      {showAppearances && (
        <View style={styles.appearanceView}>
          <TouchableOpacity onPress={() => setShowAppearances(false)} style={{ marginLeft: 20, marginBottom: 10 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>{'< Back'}</Text>
          </TouchableOpacity>
          <Text style={styles.settings}>Appearassnce</Text>
          {/* Your Appearance content here */}
        </View>
      )}

      {/* Main content view when settings & appearance are not visible */}
      {!isVisible && !showAppearance && !showAppearances && !showTools && (
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
      )}
    </View>
  );
};

export default Index;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#695b5bff',
  },
  settings: {
    color: 'white',
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
