import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TopBar from "../Navigators/TopBar"; // import the TopBar component

export default function Contact({ navigation }) {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.content}>
        <Text style={styles.text}>Contact is here!</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C203FC",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "000",
    marginBottom: 10,
  },
});
