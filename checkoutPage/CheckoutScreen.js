import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Checkout from "./checkout";

export default function CheckoutScreen(){
  return(
    <View style={styles.container}>
        <ScrollView style={styles.scroll}>
            <Checkout/>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: "white",
  },

  scroll: {
      flex: 1,
  }
})