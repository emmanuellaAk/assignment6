import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Header(){
  const navigation = useNavigation();
  return(
    <View style={StyleSheet.container}>
      <View>
                <Image style={styles.menuImage} source={require("../assets/Menu.png")} />
            </View>
            <View>
                <Image style={styles.logoImage} source={require("../assets/Logo.png")} />
            </View>
            <View>
                <Image style={styles.searchImage} source={require("../assets/Search-2.png")} />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('CheckoutScreen')}>
                <Image style={styles.shoppingImage} source={require("../assets/shoppingBag.png")} />
                </TouchableOpacity>
            </View>
    </View>
  )
}