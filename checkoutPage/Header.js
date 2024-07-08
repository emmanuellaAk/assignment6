import { StyleSheet, View, Image, Text} from "react-native";

export default function Header(){
    return(
        <>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../assets/Logo.png')}></Image>
            <Image style={styles.search} source={require('../assets/Search-2.png')}></Image>
        </View>

        <View>
        <Image style={styles.bottomLine} source={require('../assets/bottomLine.png')}></Image>
        <Text style={styles.checkout}>CHECKOUT</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  header: {
      flex: 1,
      justifyContent: 'space-between',
      alignContent: 'center',
      flexDirection: 'row',
      borderColor: 'black',
      width: '100%',
  },

  logo:{
      top: 68,
      width: 102,
      height: 41,
      left: 141,
      
  },

  search:{
      top: 73,
      right:25,
      width: 30,
      height: 30
  },

  checkout: {
      top: 50,
      fontSize: 30,
      letterSpacing: 6,
      alignSelf: 'center',
      fontWeight:'300',
  },

  bottomLine: {
      top: 125,
      width: 200,
      height: 60,
      right: 10,
      alignSelf: 'center',
  },



})