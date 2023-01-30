import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import TopBar from "../Navigators/TopBar"; // import the TopBar component

export default function Contact({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.container}>
      <TopBar />
      {/* <View style={styles.content}>
        <Text style={styles.text}>Contact is herhhe!</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View> */}
      <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Some text in the modal</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Button 2 pressed')} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Button 2</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  // content: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#C203FC",
  // },
  // text: {
  //   fontSize: 20,
  //   color: "white",
  //   fontWeight: "000",
  //   marginBottom: 10,
  // },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  modalButtonText: {
    fontSize: 18,
  },
});
