import { StyleSheet, View, Text, Image } from "react-native";

function Story(){
  return(
      <View style={styles.container}>
          <View>
              <Text style={styles.title}>OUR STORY</Text>
          </View>
          <View style={styles.circle1}>
              <Image style={styles.listViewImage} source={require("../assets/Listview.png")}/>
          </View>
          <View style={styles.circle2}>
              <Image style={styles.filterImage} source={require('../assets/Filter.png')}></Image>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1, 
  },
  title:{
      fontSize: 28,
      top: 15,
      left: 20,
      fontWeight: '300'
  },
  listViewImage:{
      top: 9,
      left: 12,
      width: 30,
      height: 30
  },
  circle1:{
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: '#FAFAFD',
      top: -28,
      left: 270
  },
  filterImage:{
      top: 12,
      left: 10,
      width: 30,
      height: 30
  },
  circle2:{
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: '#FAFAFD',
      top: -78,
      left: 330
  }
})
export default Story;