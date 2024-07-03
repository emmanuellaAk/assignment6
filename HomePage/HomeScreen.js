import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import ClothesArea from "./ClothesArea";

function HomeScreen({navigation}){
  return(
  <View style={styles.container}>
      <ScrollView>
          <Header navigation={navigation}/>
          <ClothesArea/>
      </ScrollView>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
  }
})

export default HomeScreen;
