import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';

const Appearance = () => {
  // State to track which popup is open
  const [modalVisible, setModalVisible] = useState(null); // 'theme' or 'fontSize' or null

  // State for selected options
  const [theme, setTheme] = useState('System Default');
  const [fontSize, setFontSize] = useState('Medium');

  // Options
  const themeOptions = ['Light', 'Dark', 'System Default'];
  const fontSizeOptions = ['Small', 'Medium', 'Large'];

  // Render radio buttons list
  const renderOptions = (options, selected, onSelect) => {
    return options.map(option => (
      <Pressable
        key={option}
        onPress={() => {
          onSelect(option);
          setModalVisible(null);
        }}
        style={styles.option}
      >
        <Text style={{ color: option === selected ? 'blue' : 'black' }}>
          {option} {option === selected ? '✓' : ''}
        </Text>
      </Pressable>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appearance / Theme</Text>

<View style={styles.contentView}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => setModalVisible('theme')}
      >
        <Text>Theme: {theme}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => setModalVisible('fontSize')}
      >
        <Text>Font Size: {fontSize}</Text>
      </TouchableOpacity>

      {/* Modal for Theme */}
      <Modal
        transparent={true}
        visible={modalVisible === 'theme'}
        animationType="fade"
        onRequestClose={() => setModalVisible(null)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(null)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Theme</Text>
            {renderOptions(themeOptions, theme, setTheme)}
          </View>
        </Pressable>
      </Modal>

      {/* Modal for Font Size */}
      <Modal
        transparent={true}
        visible={modalVisible === 'fontSize'}
        animationType="fade"
        onRequestClose={() => setModalVisible(null)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(null)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Font Size</Text>
            {renderOptions(fontSizeOptions, fontSize, setFontSize)}
          </View>
        </Pressable>
      </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign:'center' },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000077',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 300,
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  option: {
    paddingVertical: 10,
  },
  contentView:{
    marginTop:50
  }
});

export default Appearance;
