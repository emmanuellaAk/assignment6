import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Story from "./Story";
import Products from "./Product";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Story />
      <Products navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});

export default HomeScreen;




