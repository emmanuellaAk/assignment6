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

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  menuImage: {
      top: 72,
      marginLeft: 20,
      width: 32,
      height: 33,
  },
  logoImage:{
      top: 38,
      width: 99,
      height: 40,
      alignSelf: 'center'
  },
  searchImage:{
      top: 3,
      left: 300,
      width: 30,
      height: 30
  },
  shoppingImage:{
      top: -28,
      left: 345,
      width: 30,
      height: 30,
  }
})


export default Header;